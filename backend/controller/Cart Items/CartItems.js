import jsonwebtoken from "jsonwebtoken";
import userCart from "../../Model/CartItems.js";

const Items = async (req, res) => {
  let token = req.headers.authorization;

  let tokenData;
  try {
    tokenData = jsonwebtoken.verify(token, process.env.secretkey);
  } catch (err) {
    return res.status(401).json({ message: "User UnAuthorized" });
  }

  try {
    let userData = await userCart.find({ userId: tokenData.userId });

    res.status(200).json({ message: userData });
  } catch (error) {
    console.log(error.message);
    res.status(400).json({ message: "Error In Finding The Cart Items Data" });
  }
};

export default Items;
