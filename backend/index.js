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
import PublishOne from "./controller/Publish/Publish.js";
import account from "./route/userAccount.js";
import stripe from "./route/stripe.js";
import googleOAuth from "./route/googleOAuth.js";
import forgotPassword from "./route/forgotPassword.js";
import optimizeImage from "./controller/Publish/OptimizeImage.js";
import compression from "compression";

let app = express();

dotenv.config();
let PORT = process.env.PORT;
let db_url = process.env.db_url;

// ================= MIDDLE WARES ====================

// Enable gzip/Brotli compression
app.use(compression());

// ====== BODY PARSING
app.use(express.json({ limit: "50mb" }));
app.use("/uploads", express.static(path.join(process.cwd(), "uploads")));
app.use(express.urlencoded({ limit: "50mb", extended: true }));

// === CORS MANAGEMENT
app.use(
  cors({
    origin: ["https://book-craze.netlify.app", "http://localhost:5173"],
    credentials: true,
  })
);

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

// === ROUTERS
app.use("/user", user);
app.use("/book", getBooks);
app.use("/topbooks", topBooks);
app.post(
  "/user/publish",
  upload.single("bookImage"),
  optimizeImage,
  PublishOne
);
app.use("/comment", comments);
app.use("/cart", cartRoutes);
app.use("/more", moreDetails);
app.use("/account", account);
app.use("/payment", stripe);
app.use("/", googleOAuth);
app.use("/forgot", forgotPassword);

app.get("/protect", ProtectedPages);

// Local run (development)
if (process.env.NODE_ENV !== "production") {
  const PORT = process.env.PORT || 8000;
  app.listen(PORT, () => {
    console.log(`Server running locally on port ${PORT}`);
  });
}

// For Vercel
export default app;
