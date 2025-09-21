import jsonwebtoken from "jsonwebtoken";
import SignModel from "../Model/SignInModel.js";
import Comment from "../Model/UsersComments.js";
import cloudinary from "../controller/cloudinaryConfig.js"; // your Cloudinary config

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

  let tokenData;
  try {
    tokenData = jsonwebtoken.verify(token, process.env.secretkey);
  } catch (err) {
    return res.status(401).json({ message: "User UnAuthorized" });
  }

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

    if (userData === null)
      return res.status(400).json({ message: "User Does Not Exist" });

    let coverImageinfo = userData.coverImage;
    let profileImageinfo = userData.profileImage;

    // =========== HANDLE CLOUDINARY UPLOAD ===========
    if (req.files) {
      if (req.files.coverImage) {
        const coverFile = req.files.coverImage[0];
        const coverResult = await cloudinary.uploader.upload(coverFile.path, {
          folder: `uploads/${data.name}`,
          public_id: "cover",
          overwrite: true,
          resource_type: "image",
        });
        coverImageinfo = coverResult.secure_url;
      }

      if (req.files.profileImage) {
        const profileFile = req.files.profileImage[0];
        const profileResult = await cloudinary.uploader.upload(
          profileFile.path,
          {
            folder: `uploads/${data.name}`,
            public_id: "profile",
            overwrite: true,
            resource_type: "image",
          }
        );
        profileImageinfo = profileResult.secure_url;
      }
    }

    // ============ CHECKING IF NEW EMAIL IS NOT ASSIGNED TO ANYONE ELSE ==============
    if (userData.email === data.email) {
      // ========= UPDATING DATA ============
      await updateInfo(userData, data, coverImageinfo, profileImageinfo);

      await Comment.updateMany(
        { name: userData.name, userId: userData.userId },
        { $set: { profileImage: profileImageinfo } }
      );

      if (!data?.name?.trim()) {
        res.status(200).json({ message: "Data Updated" });
      } else {
        res.status(200).json({ message: "Data Updated", token: newtoken });
      }
    } else {
      let email = await SignModel.findOne({ email: data.email });

      if (email === null) {
        // ========= UPDATING DATA ============
        await updateInfo(userData, data, coverImageinfo, profileImageinfo);

        await Comment.updateMany(
          { name: userData.name, userId: userData.userId },
          { $set: { profileImage: profileImageinfo } }
        );

        if (!data?.name?.trim()) {
          res.status(200).json({ message: "Data Updated" });
        } else {
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
