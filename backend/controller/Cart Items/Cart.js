import jsonwebtoken from "jsonwebtoken";
import userCart from "../../Model/CartItems.js";

const CartItems = async (req, res) => {
  let dataobj = req.body;
  let token = req.headers.tokeninfo;

  if (!token) return res.status(400).json({ message: "User Not allowed" });

  let tokenData = await jsonwebtoken.verify(token, process.env.secretkey);

  let objInfo = {
    name: tokenData.name,
    userId: tokenData.userId,
    bookImage: dataobj.bookImage,
    title: dataobj.title,
    price: dataobj.price,
    quantity: 1,
  };

  try {
    let exist = await userCart.findOne({
      title: dataobj.title,
      userId: tokenData.userId,
    });

    if (exist === null) {
      await userCart.insertOne(objInfo);
      res.status(200).json("Data Added to Db");
    } else {
      res.status(200).json("Data Already Present");
    }
  } catch (error) {
    console.log(error.message);
    res.status(400).json("Can Not Set Item Carts Value");
  }
};
export default CartItems;
