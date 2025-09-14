import dotenv from "dotenv";
import jsonwebtoken from "jsonwebtoken";
import Publish from "../../Model/PublishModel.js";

// ========================== GETTING DATA PUBLISHED BY USER =============================

const getPublish = async (req, res) => {
  let token = req.headers.tokenuser;

  let secretkey = process.env.secretkey;

  let tokendata = await jsonwebtoken.verify(token, secretkey);

  try {
    let data = await Publish.find({ userId: tokendata.userId });

    if (data.length !== 0) {
      res.status(200).json({ message: data });
    } else {
      res.status(201).json({ message: "Data Not Present" });
    }
  } catch (error) {
    console.log("Can Not Get Data From DB", error.message);
    res.status(400).json({ message: error });
  }
};

export default getPublish;
