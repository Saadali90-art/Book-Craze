import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import router from "./route/router.js";
import connectDB from "./connect.js";
import path from "path";
import session from "express-session";
import passport from "passport";
import GoogleStrategy from "passport-google-oauth20";
import googleUser from "./controller/UserInfo/googleUser.js";
import cookieParser from "cookie-parser";

let app = express();

dotenv.config();
let PORT = process.env.PORT;
let db_url = process.env.db_url;

app.use(express.json({ limit: "50mb" }));
app.use("/uploads", express.static(path.join(process.cwd(), "uploads")));
app.use(express.urlencoded({ limit: "50mb", extended: true }));
app.use(
  cors({
    origin: "http://localhost:5173",
    credentials: true,
  })
);
app.use(cookieParser());

app.use(
  session({
    secret: "ANA@.com",
    resave: false,
    saveUninitialized: true,
  })
);

app.use(passport.initialize());
app.use(passport.session());

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
app.use("/", router);

app.listen(PORT, () => {
  console.log("server up..");
});
