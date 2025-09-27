import express from "express";
import CartItems from "../controller/Cart Items/Cart.js";
import Items from "../controller/Cart Items/CartItems.js";
import removeCartItem from "../controller/Cart Items/RemoveItem.js";
import RemoveCartAuto from "../controller/Cart Items/RemoveCartAuto.js";

const cartRoutes = express.Router();

cartRoutes.post("/saveitems", CartItems);

cartRoutes.get("/cartitems", Items);

cartRoutes.delete("/removeitem", removeCartItem);

cartRoutes.delete("/removecartauto", RemoveCartAuto);

export default cartRoutes;
