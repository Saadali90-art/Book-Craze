import express from "express";
import checkEmail from "../controller/Forgot Password/CheckEmail.js";
import forgotUserData from "../controller/Forgot Password/ForgotUserData.js";
import resetToken from "../controller/Forgot Password/ResetToken.js";
import verifyReset from "../controller/Forgot Password/VerifyReset.js";
import updatePass from "../controller/Forgot Password/UpdatePass.js";

const forgotPassword = express.Router();

forgotPassword.post("/checkemail", checkEmail);

forgotPassword.post("/forgotuserdata", forgotUserData);

forgotPassword.post("/resetToken", resetToken);

forgotPassword.post("/verifyreset", verifyReset);

forgotPassword.post("/updatepass", updatePass);

export default forgotPassword;
