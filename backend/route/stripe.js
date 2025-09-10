import express from "express";
import cartCheckout from "../controller/Stripe Checkout/cartCheckout.js";
import planCheckout from "../controller/Stripe Checkout/planCheckout.js";

const stripe = express.Router();

stripe.post("/cartcheckout", cartCheckout);

stripe.post("/plancheckout", planCheckout);

export default stripe;
