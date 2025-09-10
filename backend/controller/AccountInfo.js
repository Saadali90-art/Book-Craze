import jsonwebtoken from "jsonwebtoken";
import SignModel from "../Model/SignInModel.js";
import Comment from "../Model/UsersComments.js";

const updateInfo = async (userData, data, coverImageinfo, profileImageinfo) => {
  return await SignModel.updateOne(
    { name: userData.name, userId: userData.userId },
    {
      $set: {
        name: data?.name?.trim(),
        gender: data.gender,
        location: data.location,
        email: data.email,
        about: data.about,
        coverImage: coverImageinfo,
        profileImage: profileImageinfo,
      },
    }
  );
};

const accountInfo = async (req, res) => {
  let token = req.headers.tokeninfo;
  let data = req.body;
  let newtoken = null;

  let tokenData = await jsonwebtoken.verify(token, process.env.secretkey);

  // ========== MAKING NEW TOKEN IF THE NAME IS CHANGED ============

  if (tokenData.name !== data?.name?.trim()) {
    let tokeninfo = {
      name: data?.name?.trim(),
      userId: tokenData.userId,
    };

    newtoken = await jsonwebtoken.sign(tokeninfo, process.env.secretkey);
  }

  try {
    // ============= Obtaining Complete User Data =============

    let userData = await SignModel.findOne({
      name: tokenData.name,
      userId: tokenData.userId,
    });

    let coverImageinfo = userData.coverImage;
    let profileImageinfo = userData.profileImage;

    if (req.files) {
      if (req.files.coverImage) {
        coverImageinfo = `/uploads/${data.name}/${req.files.coverImage[0].filename}`;
      }
      if (req.files.profileImage) {
        profileImageinfo = `/uploads/${data.name}/${req.files.profileImage[0].filename}`;
      }
    }

    if (userData === null)
      return res.status(400).json({ message: "User Does Not Exist" });

    // ============ CHECKING IF NEW EMAIL IS NOT ASSIGNED TO ANY ONE ELSE ==============

    if (userData.email === data.email) {
      // ========= UPDATING DATA ============

      await updateInfo(userData, data, coverImageinfo, profileImageinfo);

      await Comment.updateMany(
        {
          name: userData.name,
          userId: userData.userId,
        },
        { $set: { profileImage: profileImageinfo } }
      );

      if (
        data?.name?.trim() === "" ||
        data?.name?.trim() === null ||
        data?.name?.trim() === undefined
      ) {
        res.status(200).json({ message: "Data Updated" });
      }
      if (data.name) {
        res.status(200).json({ message: "Data Updated", token: newtoken });
      }
    } else {
      let email = await SignModel.findOne({ email: data.email });

      if (email === null) {
        // ========= UPDATING DATA ============

        await updateInfo(userData, data, coverImageinfo, profileImageinfo);

        await Comment.updateMany(
          {
            name: userData.name,
            userId: userData.userId,
          },
          { $set: { profileImage: profileImageinfo } }
        );

        if (
          data?.name?.trim() === "" ||
          data?.name?.trim() === null ||
          data?.name?.trim() === undefined
        ) {
          res.status(200).json({ message: "Data Updated" });
        }
        if (data.name) {
          res.status(200).json({ message: "Data Updated", token: newtoken });
        }
      } else {
        res.status(401).json({ message: "Email Already Taken" });
      }
    }
  } catch (error) {
    console.log(error.message);
    res.status(400).json({ message: "Error In the Account Informations" });
  }
};
export default accountInfo;
