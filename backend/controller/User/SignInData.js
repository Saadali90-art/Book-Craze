import bcrypt from "bcrypt";
import SignModel from "../../Model/SignInModel.js";
import jsonwebtoken from "jsonwebtoken";
import dotenv from "dotenv";

// ======================== GETTING THE USER DATA FOR THE HOME PAGE SIGN UP =======================

const SignInData = async (req, res) => {
  let tokenfront = req.headers.authorization;

  let secretkey = process.env.secretkey;

  let tokendata = await jsonwebtoken.verify(tokenfront, secretkey);

  try {
    let result = await SignModel.findOne({
      name: tokendata.name,
      userId: tokendata.userId,
    });

    if (!result) {
      return res.status(404).json({ message: "User Not Found" });
    }

    res.status(200).json({ message: result });
  } catch (error) {
    console.log("Can not Find User Sign In", error.message);
    res.status(400).json({ message: "User Not Found" });
  }
};

export default SignInData;
