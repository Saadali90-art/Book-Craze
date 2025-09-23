import SignModel from "../../Model/SignInModel.js";
import jsonwebtoken from "jsonwebtoken";

// ======================== GETTING THE USER DATA FOR THE HOME PAGE SIGN UP =======================

const SignInData = async (req, res) => {
  let tokenfront = req.headers.authorization;

  let tokenData;
  try {
    tokenData = jsonwebtoken.verify(tokenfront, process.env.secretkey);
  } catch (err) {
    return res.status(401).json({ message: "Invalid or Expired Token" });
  }

  try {
    let result = await SignModel.findOne({
      name: tokenData.name,
      userId: tokenData.userId,
    });

    if (!result) {
      return res.status(404).json({ message: "User Not Found" });
    } else {
      res.status(200).json({ message: result });
    }
  } catch (error) {
    res.status(400).json({ message: "User Not Found" });
  }
};

export default SignInData;
