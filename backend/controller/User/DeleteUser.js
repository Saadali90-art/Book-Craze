import bcrypt from "bcrypt";
import SignModel from "../../Model/SignInModel.js";
import jsonwebtoken from "jsonwebtoken";
import Publish from "../../Model/PublishModel.js";
import deletedUserInfo from "../../Model/DeleteUsersInfo.js";
import deletedBooks from "../../Model/DeletedBooks.js";

// ========================= DELETING THE USER DATA ================================

const deleteUser = async (req, res) => {
  let token = req.headers.token;
  let { pass } = req.body;

  let tokenData;
  try {
    tokenData = jsonwebtoken.verify(token, process.env.secretkey);
  } catch (err) {
    return res.status(401).json({ message: "Invalid or Expired Token" });
  }

  try {
    let userData = await SignModel.findOne({
      name: tokenData.name,
      userId: tokenData.userId,
    });

    if (userData === null)
      return res.status(401).json({ message: "User Unauthorized" });

    const plainUser = {
      userId: userData.userId,
      name: userData.name,
      email: userData.email,
      password: userData.password,
      phone: userData.phone,
      date: userData.date,
      profileImage: userData.profileImage,
      coverImage: userData.coverImage,
      gender: userData.gender,
      location: userData.location,
      about: userData.about,
      resetPass: userData.resetPass,
      resetPassExpiry: userData.resetPassExpiry,
    };

    let userPass = await bcrypt.compare(pass, userData.password);

    if (userPass) {
      let userBooks = await Publish.find({ userId: tokenData.userId }).lean();

      await deletedUserInfo.insertOne(plainUser);

      await deletedBooks.insertMany(userBooks.map(({ _id, ...rest }) => rest));

      await SignModel.deleteOne({
        name: tokenData.name,
        userId: tokenData.userId,
      });

      await Publish.deleteMany({ userId: tokenData.userId });
      res.status(200).json({ message: "User Deleted" });
    } else {
      res.status(201).json({ message: "Invalid Credientals" });
    }
  } catch (error) {
    res.status(400).json({ message: "User Not Deleted" });
  }
};

export default deleteUser;
