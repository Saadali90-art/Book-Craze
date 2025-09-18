import mongoose from "mongoose";

const userCarts = mongoose.Schema({
  userId: { type: String, required: true },
  name: { type: String, required: true },
  title: { type: String, required: true },
  bookImage: { type: String, required: true },
  price: { type: Number, required: true },
  quantity: { type: Number, required: true },
});

const userCart = mongoose.model("carts", userCarts);

export default userCart;
