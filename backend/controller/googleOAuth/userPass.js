import SignModel from "../../Model/SignInModel.js";
import bcrypt from "bcrypt";
import jsonwebtoken from "jsonwebtoken";

const userGooglePass = async (req, res) => {
  let { pass, id } = req.body;

  try {
    let salted = await bcrypt.genSalt();
    let saltpass = await bcrypt.hash(pass, salted);
    await SignModel.updateOne({ userId: id }, { $set: { password: saltpass } });

    let userData = await SignModel.findOne({ password: saltpass });

    let token = await jsonwebtoken.sign(
      { name: userData.name, userId: userData.userId },
      process.env.secretkey
    );

    res.status(200).json({ message: "Password Created", token });
  } catch (error) {
    console.log(error.message);
    res
      .status(400)
      .json({ message: "Error while updating google user password " });
  }
};

export default userGooglePass;
