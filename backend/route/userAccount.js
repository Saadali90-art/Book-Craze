import express from "express";
import upload from "../multer/multer.js";
import SignInData from "../controller/User/SignInData.js";
import accountInfo from "../controller/AccountInfo.js";

const account = express.Router();

account.post(
  "/changeinfo",
  upload.fields([
    { name: "profileImage", maxCount: 1 },
    { name: "coverImage", maxCount: 1 },
  ]),
  accountInfo
);

account.get("/myaccount", SignInData);

export default account;
