import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  userId: { type: String, required: true },
  name: { type: String, required: true, minlength: 3 },
  email: { type: String, required: true },
  password: { type: String, required: true },
  phone: { type: Number, required: true },
  date: { type: Date, default: Date.now },
  image: {
    type: String,
    default: null,
  },
  coverimage: {
    type: String,
    default: null,
  },
  gender: { type: String, default: null },
  location: { type: String, default: "global" },
  about: { type: String, default: null },
});

const SignModel = mongoose.model("Sign_In", userSchema);

export default SignModel;
