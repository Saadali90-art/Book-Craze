import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  userId: { type: String, required: true },
  name: { type: String, required: true, minlength: 3 },
  email: { type: String, required: true },
  password: { type: String, default: null },
  phone: { type: Number, default: null },
  date: { type: Date, default: Date.now },
  profileImage: {
    type: String,
    default: null,
  },
  coverImage: {
    type: String,
    default: null,
  },
  gender: { type: String, default: null },
  location: { type: String, default: "global" },
  about: { type: String, default: null },
  resetPass: { type: String, default: null },
  resetPassExpiry: { type: Number, default: null },
});

const SignModel = mongoose.model("Sign_In", userSchema);

export default SignModel;
