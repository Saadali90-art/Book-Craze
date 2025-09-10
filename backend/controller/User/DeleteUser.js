import bcrypt from "bcrypt";
import SignModel from "../../Model/SignInModel.js";
import jsonwebtoken from "jsonwebtoken";
import dotenv from "dotenv";
import Publish from "../../Model/PublishModel.js";

// ========================= DELETING THE USER DATA ================================

const deleteUser = async (req, res) => {
  let data = req.headers.token;

  try {
    let secretkey = process.env.secretkey;
    let tokendata = await jsonwebtoken.verify(data, secretkey);

    await SignModel.deleteOne({
      name: tokendata.name,
      userId: tokendata.userId,
    });

    await Publish.deleteMany({ userId: tokendata.userId });

    res.status(200).json({ message: "User Deleted" });
  } catch (error) {
    console.log("Error While Deleting The User Data", error.message);
    res.status(400).json({ message: "User Not Deleted" });
  }
};

export default deleteUser;
