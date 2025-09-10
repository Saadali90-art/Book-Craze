import express from "express";
import sendData from "../controller/User/SignUp.js";
import SignInData from "../controller/User/SignInData.js";
import deleteUser from "../controller/User/DeleteUser.js";
import Login from "../controller/User/Login.js";

const user = express.Router();

user.post("/signup", sendData);

user.get("/signindata", SignInData);

user.delete("/deleteUser", deleteUser);

user.post("/login", Login);

export default user;
