import SignModel from "../../Model/SignInModel.js";
import jsonwebtoken from "jsonwebtoken";

const resetToken = async (req, res) => {
  let { data } = req.body;

  try {
    let userInfo = await SignModel.findOne({ resetPass: data });

    if (userInfo === null) {
      res.status(201).json({ message: "signup" });
    } else {
      let token = await jsonwebtoken.sign(
        userInfo.resetPass,
        process.env.RESET_TOKEN_KEY
      );
      res.status(200).json({ message: token });
    }
  } catch (error) {
    console.log(error);

    res.status(400).json({ message: "Error While Giving Reset Token" });
  }
};

export default resetToken;
