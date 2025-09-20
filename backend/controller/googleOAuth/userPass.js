import SignModel from "../../Model/SignInModel.js";
import bcrypt from "bcrypt";

const userGooglePass = async (req, res) => {
  let { pass, id } = req.body;

  try {
    let salted = await bcrypt.genSalt();
    let saltpass = await bcrypt.hash(pass, salted);
    await SignModel.updateOne({ userId: id }, { $set: { password: saltpass } });

    res.status(200).json({ message: "Password Created" });
  } catch (error) {
    console.log(error.message);
    res
      .status(400)
      .json({ message: "Error while updating google user password " });
  }
};

export default userGooglePass;
