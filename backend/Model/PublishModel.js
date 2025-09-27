import mongoose from "mongoose";

const Publisher = new mongoose.Schema(
  {
    userId: { type: String, required: true },
    title: { type: String, required: true },
    category: { type: String, required: true },
    gender: { type: String, required: true },
    description: { type: String, required: true },
    price: { type: Number, required: true },
    bookImage: { type: String, required: true },
    date: { type: Date, default: Date.now },
    views: { type: Number, default: 0 },
  },
  { timestamps: true }
);

const Publish = mongoose.model("publishes", Publisher);

export default Publish;
