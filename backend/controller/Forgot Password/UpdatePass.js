import bcrypt from "bcrypt";
import SignModel from "../../Model/SignInModel.js";

const updatePass = async (req, res) => {
  let { pass, user } = req.body;
  let data = { pass, user };

  try {
    let passSalt = await bcrypt.genSalt();
    let genpass = await bcrypt.hash(data.pass, passSalt);

    await SignModel.updateOne(
      {
        userId: data.user.userId,
        name: data.user.name,
        password: data.user.password,
      },
      { $set: { password: genpass } }
    );

    res.status(200).json({ message: "/login" });
  } catch (error) {
    console.log(error);

    res.status(400).json({ message: "Error in Password Chnaging" });
  }
};

export default updatePass;
