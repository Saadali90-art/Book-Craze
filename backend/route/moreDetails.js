import express from "express";
import alsolike from "../controller/MoreDetails/AlsoLike.js";
import moreInfo from "../controller/MoreDetails/MoreInfo.js";

const moreDetails = express.Router();

moreDetails.post("/youlike", alsolike);

moreDetails.post("/getmoreinfo", moreInfo);

export default moreDetails;
