import express from "express";
import passport from "passport";
import googleLogin from "../controller/googleOAuth/GoogleLogin.js";
import userGooglePass from "../controller/googleOAuth/userPass.js";
import SignModel from "../Model/SignInModel.js";

const googleOAuth = express.Router();

googleOAuth.get(
  "/auth/google",
  passport.authenticate("google", { scope: ["profile", "email"] })
);

googleOAuth.get(
  "/auth/google/callback",
  passport.authenticate("google", { failureRedirect: "/signup" }),
  async (req, res) => {
    const userId = req.user.userId;

    let userInfo = await SignModel.findOne({ userId: userId });

    if (userInfo.password === null) {
      res.redirect(`${process.env.VITE_FRONTEND_URL}googlepassword/${userId}`);
    } else {
      res.redirect(`${process.env.VITE_FRONTEND_URL}?${userId}`);
    }
  }
);

googleOAuth.post("/googlelogin", googleLogin);

googleOAuth.post("/googleuserpass", userGooglePass);

export default googleOAuth;
