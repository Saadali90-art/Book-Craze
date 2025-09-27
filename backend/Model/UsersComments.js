import mongoose from "mongoose";

const userComments = mongoose.Schema(
  {
    userId: { type: String, required: true },
    name: { type: String, required: true },
    Author: { type: Boolean, required: true },
    commentValue: { type: String, required: true },
    title: { type: String, required: true },
    profileImage: { type: String },
    likes: { type: Number, default: 0 },
    commentId: { type: String, required: true },
  },
  { timestamps: true }
);

const Comment = mongoose.model("Usercomments", userComments);

export default Comment;
