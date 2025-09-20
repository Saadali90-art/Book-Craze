import SignModel from "../../Model/SignInModel.js";
import crypto from "crypto";
import sendEmail from "./EmailSend.js";

const checkEmail = async (req, res) => {
  let { data } = req.body;

  try {
    let user = await SignModel.findOne({ email: data });

    if (user === null) {
      res.status(201).json({ message: "signup" });
    } else {
      let resetPassword = crypto
        .createHash("sha256")
        .update(data + Date.now())
        .digest("hex")
        .slice(0, 7);

      console.log(resetPassword);

      let resetExpire = Date.now() + 2 * 60 * 1000;

      await SignModel.updateOne(
        { email: user.email },
        { $set: { resetPass: resetPassword, resetPassExpiry: resetExpire } }
      );

      await sendEmail(user.email, resetPassword);

      res.status(200).json({ message: "emailverify" });
    }
  } catch (error) {
    res.status(400).json({ message: error });
  }
};

export default checkEmail;
