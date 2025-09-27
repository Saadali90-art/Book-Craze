import jsonwebtoken from "jsonwebtoken";
import Publish from "../../Model/PublishModel.js";
import Comment from "../../Model/UsersComments.js";
import SignModel from "../../Model/SignInModel.js";
import crypto from "crypto";

const comment = async (req, res) => {
  let { token, commentValue, title } = req.body;
  let data = { token, commentValue, title };

  let tokenData;
  try {
    tokenData = jsonwebtoken.verify(token, process.env.secretkey);
  } catch (err) {
    return res.status(401).json({ message: "User UnAuthorized" });
  }

  let commentId = crypto
    .createHash("sha256")
    .update(JSON.stringify(data) + Date.now().toString())
    .digest("hex")
    .slice(0, 13);

  try {
    let userData = await SignModel.findOne({
      userId: tokenData.userId,
      name: tokenData.name,
    });

    let usersbook = await Publish.findOne({ title: data.title });

    let Author = null;

    if (usersbook.userId === tokenData.userId) {
      Author = true;
    } else {
      Author = false;
    }

    let commentData = {
      userId: tokenData.userId,
      commentId,
      Author,
      name: tokenData.name,
      commentValue,
      title,
      profileImage: userData.profileImage,
    };

    await Comment.insertOne(commentData);
    res.status(200).json({ message: "Comment Added To DB" });
  } catch (error) {
    console.log(error.message);
    res.status(400).json({ message: error.message });
  }
};

export default comment;
