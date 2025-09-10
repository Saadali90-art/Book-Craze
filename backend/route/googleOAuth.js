import express from "express";
import passport from "passport";
import googleLogin from "../controller/googleOAuth/GoogleLogin.js";

const googleOAuth = express.Router();

googleOAuth.get(
  "/auth/google",
  passport.authenticate("google", { scope: ["profile", "email"] })
);

googleOAuth.get(
  "/auth/google/callback",
  passport.authenticate("google", { failureRedirect: "/signup" }),
  (req, res) => {
    const userId = req.user.userId;

    res.redirect(`http://localhost:5173/?${userId}`);
  }
);

googleOAuth.post("/googlelogin", googleLogin);

export default googleOAuth;
