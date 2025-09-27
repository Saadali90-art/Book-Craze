import express from "express";
import comment from "../controller/Comments/Comments.js";
import getComments from "../controller/Comments/getComments.js";
import likeComment from "../controller/Comments/LikeComment.js";

const comments = express.Router();

comments.post("/savecomment", comment);
comments.post("/getcomments", getComments);
comments.post("/likes", likeComment);

export default comments;
