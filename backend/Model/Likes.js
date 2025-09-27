import mongoose from "mongoose";

const userSchema = mongoose.Schema({
  userId: { type: String, required: true },
  commentId: { type: String, required: true },
});

const userLikes = mongoose.model("likedby", userSchema);

export default userLikes;
