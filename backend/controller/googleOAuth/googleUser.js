import crypto from "crypto";
import SignModel from "../../Model/SignInModel.js";

const googleUser = async (profile) => {
  let userId = crypto
    .createHash("sha256")
    .update(profile.displayName + profile.emails[0].value)
    .digest("hex")
    .slice(0, 13);

  let googleData = {
    name: profile.displayName,
    userId: userId,
    email: profile.emails[0].value,
  };

  try {
    let user = await SignModel.findOne({
      email: googleData.email,
    });

    // If user does not exist → insert
    if (!user) {
      let result = await SignModel.insertOne(googleData);

      // fetch the inserted document
      user = await SignModel.findById(result.insertedId);
      console.log("User Data Added To DB");
    } else {
      console.log("User Already Present");
    }

    return { profile, userId };
  } catch (error) {
    console.log(error.message);
    return null;
  }
};

export default googleUser;
