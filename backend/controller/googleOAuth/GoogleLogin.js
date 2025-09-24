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
    } else {
      res.status(401).json({ message: "User Invalid" });
    }
  } catch (error) {
    console.log(error);

    res.status(400).json({ message: error.mesage });
  }
};

export default googleLogin;
