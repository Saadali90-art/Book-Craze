import express from "express";
import sendData from "../controller/UserInfo/SignUp.js";
import deleteUser from "../controller/UserInfo/DeleteUser.js";
import Login from "../controller/UserInfo/Login.js";
import getPublish from "../controller/Books/Dashboard.js";
import PublishOne from "../controller/Books/Publish.js";
import ProtectedPages from "../controller/UserInfo/Protect.js";
import alsolike from "../controller/AlsoLike.js";
import comment from "../controller/Comments/Comments.js";
import newArrivals from "../controller/Books/NewArrivals.js";
import getComments from "../controller/Comments/getComments.js";
import moreInfo from "../controller/Books/MoreInfo.js";
import discoveritems from "../controller/Books/DiscoverItems.js";
import weeklyTop from "../controller/Books/Weeklytop.js";
import MontlyPicks from "../controller/Books/MontlyPicks.js";
import SignInData from "../controller/UserInfo/SignInData.js";
import Titles from "../controller/Books/Titles.js";
import Search from "../controller/Books/Search.js";
import CategoryData from "../controller/Books/CategoryData.js";
import accountInfo from "../controller/UserInfo/AccountInfo.js";
import CartItems from "../controller/Cart Items/Cart.js";
import Items from "../controller/Cart Items/CartItems.js";
import upload from "../multer/multer.js";
import removeCartItem from "../controller/Cart Items/RemoveItem.js";
import likeComment from "../controller/Comments/LikeComment.js";
import cartCheckout from "../controller/Stripe Checkout/stripeCheckout.js";
import planCheckout from "../controller/Stripe Checkout/planCheckout.js";
import passport from "passport";
import googleUser from "../controller/UserInfo/googleUser.js";
import googleLogin from "../controller/UserInfo/GoogleLogin.js";

let router = express.Router();

router.post("/signup", sendData);

router.get("/signindata", SignInData);

router.delete("/deleteUser", deleteUser);

router.post("/login", Login);

router.get("/user/dashboard", getPublish);

router.post("/user/publish", upload.single("bookImage"), PublishOne);

router.get("/protect", ProtectedPages);

router.post("/youlike", alsolike);

router.post("/comment", comment);

router.get("/newarrivals", newArrivals);

router.post("/allcomments", getComments);

router.post("/getmoreinfo", moreInfo);

router.get("/discover", discoveritems);

router.get("/weeklytop", weeklyTop);

router.get("/monthlypicks", MontlyPicks);

router.get("/titles", Titles);

router.get("/searches", Search);

router.post("/category", CategoryData);

router.get("/allBooks", Search);

router.get("/myaccount", SignInData);

router.post(
  "/changeinfo",
  upload.fields([
    { name: "profileImage", maxCount: 1 },
    { name: "coverImage", maxCount: 1 },
  ]),
  accountInfo
);

router.post("/cart", CartItems);

router.get("/cartitems", Items);

router.delete("/removeitem", removeCartItem);

router.post("/likes", likeComment);

router.post("/checkout-session", cartCheckout);

router.post("/plan-session", planCheckout);

router.get(
  "/auth/google",
  passport.authenticate("google", { scope: ["profile", "email"] })
);

router.get(
  "/auth/google/callback",
  passport.authenticate("google", { failureRedirect: "/signup" }),
  (req, res) => {
    const userId = req.user.userId;

    res.redirect(`http://localhost:5173/?${userId}`);
  }
);

router.post("/googlelogin", googleLogin);

export default router;
