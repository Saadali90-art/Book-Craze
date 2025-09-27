import jsonwebtoken from "jsonwebtoken";
import userLikes from "../../Model/Likes.js";
import Comment from "../../Model/UsersComments.js";

const likeComment = async (req, res) => {
  let data = req.body;
  let token = req.headers.tokeninfo;

  let tokenData;
  try {
    tokenData = jsonwebtoken.verify(token, process.env.secretkey);
  } catch (err) {
    return res.status(401).json({ message: "Invalid or Expired Token" });
  }

  try {
    let user = await userLikes.findOne({
      userId: tokenData.userId,
      commentId: data.item.commentId,
    });

    let updateComment = null;

    if (user === null) {
      // Add new like

      await userLikes.insertOne({
        userId: tokenData.userId,
        commentId: data.item.commentId,
      });

      updateComment = await Comment.updateOne(
        { commentId: data.item.commentId },
        { $inc: { likes: 1 } }
      );
    } else {
      // Remove like
      await userLikes.deleteOne(user);
      updateComment = await Comment.updateOne(
        { commentId: data.item.commentId, likes: { $gt: 0 } },
        { $inc: { likes: -1 } }
      );
    }

    res.status(200).json({ message: updateComment });
  } catch (error) {
    console.log(error.message);
    res.status(400).json({ message: "Error in the Comments Likes Section" });
  }
};

export default likeComment;
