import express from "express";
import weeklyTop from "../controller/TopBooks/Weeklytop.js";
import MontlyPicks from "../controller/TopBooks/MontlyPicks.js";

const topBooks = express.Router();

topBooks.get("/weeklytop", weeklyTop);

topBooks.get("/monthlypicks", MontlyPicks);

export default topBooks;
