import SignModel from "../../Model/SignInModel.js";
import jsonwebtoken from "jsonwebtoken";
const googleLogin = async (req, res) => {
  let { id } = req.body;
  try {
    let user = await SignModel.findOne({ userId: id });

    if (user !== null) {
      let token = await jsonwebtoken.sign(
        { name: user.name, userId: user.userId },
        process.env.secretkey
      );

      res.status(200).json({ message: user, token });
    }
  } catch (error) {
    console.log(error.message);
    res.status(400).json({ message: error.mesage });
  }
};

export default googleLogin;
