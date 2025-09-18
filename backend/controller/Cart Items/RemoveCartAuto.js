import userCart from "../../Model/CartItems.js";

const RemoveCartAuto = async (req, res) => {
  let { userid } = req.body;

  try {
    if (userid) {
      await userCart.deleteMany({ userId: userid });
      res.status(200).json({ message: "User Cart Cleared" });
    } else {
      res.status(201).json({ message: "User Id Not Founded" });
    }
  } catch (error) {
    console.log(error.message);
    res.status(400).json({ message: error.message });
  }
};

export default RemoveCartAuto;
