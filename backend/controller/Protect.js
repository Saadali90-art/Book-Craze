import dotenv from "dotenv";
import jsonwebtoken from "jsonwebtoken";
import SignModel from "../Model/SignInModel.js";

const ProtectedPages = async (req, res) => {
  let token = req.headers.token;
  let secretkey = process.env.secretkey;

  if (token) {
    let tokendata = await jsonwebtoken.verify(token, secretkey);

    try {
      let result = await SignModel.find({
        name: tokendata.name,
        userId: tokendata.userId,
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
