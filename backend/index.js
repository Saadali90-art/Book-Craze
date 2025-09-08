import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import router from "./route/router.js";
import connectDB from "./connect.js";
import path from "path";

let app = express();

dotenv.config();
let PORT = process.env.PORT;
let db_url = process.env.db_url;

app.use(express.json({ limit: "50mb" }));
app.use(express.json());
app.use("/uploads", express.static(path.join(process.cwd(), "uploads")));
app.use(express.urlencoded({ limit: "50mb", extended: true }));
app.use(cors());

connectDB(db_url);
app.use("/", router);

app.listen(PORT, () => {
  console.log("server up..");
});
