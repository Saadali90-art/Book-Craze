import bcrypt from "bcrypt";
import SignModel from "../../Model/SignInModel.js";
import crypto from "crypto";
import jsonwebtoken from "jsonwebtoken";

// ==============VERIFYING DATA IF THEY ARE PREVIOUS PRESENT ===================
const verify = async (data) => {
  let result = await SignModel.find({
    $or: [{ name: data.name }, { email: data.email }],
  });

  if (result.length <= 0) {
    return true;
  } else {
    return false;
  }
};

// ================== GETTING DATA FROM SIGN UP PAGE =====================

const sendData = async (req, res) => {
  let { name, email, phone } = req.body;

  // ======= SALTING THE PASSWORD
  const genSalt = await bcrypt.genSalt();
  let password = await bcrypt.hash(req.body.password, genSalt);

  // =========== MAKING THE USER ID

  let userId = crypto
    .createHash("sha256")
    .update(name + email)
    .digest("hex")
    .slice(0, 13);

  // ============= JWS TOKEN

  let data = { userId, name, email, password, phone };

  if (await verify(data)) {
    try {
      let result = await SignModel.insertOne(data);

      let secretkey = process.env.secretkey;

      let token = await jsonwebtoken.sign(
        { name: result.name, userId: result.userId },
        secretkey
      );

      res.status(200).json({ message: "Data Sended TO DB", token: token });
    } catch (error) {
      console.log("Error While Sending Data To DB", error.message);
      res.status(401).json({ message: "Error While Sending Data To DB" });
    }
  } else {
    res.status(400).json({
      message: "Data Already Present",
    });
  }
};

export default sendData;
