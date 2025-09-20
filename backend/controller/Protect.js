import dotenv from "dotenv";
import jsonwebtoken from "jsonwebtoken";
import SignModel from "../Model/SignInModel.js";

const ProtectedPages = async (req, res) => {
  let token = req.headers.token;

  if (token) {
    let tokenData;
    try {
      tokenData = jsonwebtoken.verify(token, process.env.secretkey);
    } catch (err) {
      return res.status(401).json({ message: "User UnAuthorized" });
    }

    try {
      let result = await SignModel.find({
        name: tokenData.name,
        userId: tokenData.userId,
      });

      if (result !== null) {
        res.status(200).json({ userVerf: true });
      } else {
        res.status(201).json({ userVerf: false });
      }
    } catch (error) {
      console.log(error.message);
    }
  } else {
    res.status(201).json({ userVerf: false });
  }
};

export default ProtectedPages;
