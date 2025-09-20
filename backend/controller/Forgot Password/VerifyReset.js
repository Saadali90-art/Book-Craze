import jsonwebtoken from "jsonwebtoken";
import SignModel from "../../Model/SignInModel.js";

const verifyReset = async (req, res) => {
  let { data } = req.body;

  if (!data)
    return res.status(400).json({ message: "Error While Finding Token" });

  let tokenData = await jsonwebtoken.verify(data, process.env.RESET_TOKEN_KEY);

  try {
    let userInfo = await SignModel.findOne({ resetPass: tokenData });

    if (userInfo === null) {
      res.status(201).json({ message: false, userData: null });
    } else {
      res.status(200).json({ message: true, userData: userInfo });
    }
  } catch (error) {
    res.status(400).json({ message: "Error While Checking Reset Token" });
  }
};

export default verifyReset;
