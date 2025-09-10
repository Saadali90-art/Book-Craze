import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import connectDB from "./connect.js";
import path from "path";
import session from "express-session";
import passport from "passport";
import GoogleStrategy from "passport-google-oauth20";
import googleUser from "./controller/googleOAuth/googleUser.js";
import user from "./route/user.js";
import getBooks from "./route/getBooks.js";
import comments from "./route/comments.js";
import topBooks from "./route/topBooks.js";
import cartRoutes from "./route/cart.js";
import ProtectedPages from "./controller/Protect.js";
import moreDetails from "./route/moreDetails.js";
import upload from "./multer/multer.js";
import PublishOne from "./controller/Publish.js";
import account from "./route/userAccount.js";
import stripe from "./route/stripe.js";
import googleOAuth from "./route/googleOAuth.js";

let app = express();

dotenv.config();
let PORT = process.env.PORT;
let db_url = process.env.db_url;

// ================= MIDDLE WARES ====================
// ====== BODY PARSING
app.use(express.json({ limit: "50mb" }));
app.use("/uploads", express.static(path.join(process.cwd(), "uploads")));
app.use(express.urlencoded({ limit: "50mb", extended: true }));

// === CORS MANAGEMENT
app.use(
  cors({
    origin: "http://localhost:5173",
    credentials: true,
  })
);

// === ROUTERS
app.use("/user", user);
app.use("/book", getBooks);
app.use("/topbooks", topBooks);
app.post("/user/publish", upload.single("bookImage"), PublishOne);
app.use("/comment", comments);
app.use("/cart", cartRoutes);
app.use("/more", moreDetails);
app.use("/account", account);
app.use("/payment", stripe);
app.use("/", googleOAuth);

app.get("/protect", ProtectedPages);

// === SESSION MANAGEMENT
app.use(
  session({
    secret: "ANA@.com",
    resave: false,
    saveUninitialized: true,
  })
);

// === PASSPORT INITIALIZATION
app.use(passport.initialize());
app.use(passport.session());

// ===GOOGLE STRATEGY
passport.use(
  new GoogleStrategy(
    {
      clientID: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
      callbackURL: process.env.GOOGLE_CLIENT_CALLBACK,
    },
    async (accessToken, refreshToken, profile, done) => {
      let userData = await googleUser(profile);

      if (!userData) {
        return done(null, false);
      }

      done(null, { ...userData.profile, userId: userData.userId });
    }
  )
);

passport.serializeUser((user, done) => done(null, user));
passport.deserializeUser((obj, done) => done(null, obj));

connectDB(db_url);

app.listen(PORT, () => {
  console.log("server up..");
});
