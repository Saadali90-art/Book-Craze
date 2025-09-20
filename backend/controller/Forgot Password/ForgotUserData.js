import SignModel from "../../Model/SignInModel.js";

const forgotUserData = async (req, res) => {
  let { userid } = req.body;

  try {
    let userData = await SignModel.findOne({ email: userid });

    if (userData === null) {
      res.status(201).json({ message: "User Unauthorized" });
    } else {
      res.status(200).json({ message: userData });
    }
  } catch (error) {
    res.status(400).json({ message: "Data Not Found For User" });
  }
};

export default forgotUserData;
