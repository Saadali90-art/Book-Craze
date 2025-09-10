import express from "express";
import getPublish from "../controller/getBooks/Dashboard.js";
import newArrivals from "../controller/getBooks/NewArrivals.js";
import CategoryData from "../controller/getBooks/CategoryBooks/CategoryData.js";
import Titles from "../controller/getBooks/Titles.js";

const getBooks = express.Router();

getBooks.get("/dashboard", getPublish);
getBooks.get("/newarrivals", newArrivals);
getBooks.get("/discover", newArrivals);
getBooks.get("/allBooks", newArrivals);
getBooks.post("/category", CategoryData);
getBooks.get("/searches", newArrivals);
getBooks.get("/titles", Titles);

export default getBooks;
