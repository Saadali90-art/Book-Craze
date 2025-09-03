import userCart from "../../Model/CartItems.js";

const removeCartItem = async (req, res) => {
  let data = req.body;

  try {
    let result = await userCart.deleteMany({
      title: data.title,
      bookImage: data.bookImage,
    });
    console.log("Data Deleted");
    res.status(200).json({ message: "Data Deleted" });
  } catch (error) {
    console.log(error.message);
    res.status(400).json({ message: "Data Not Deleted from Cart Item" });
  }
};

export default removeCartItem;
