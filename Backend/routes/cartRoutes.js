const express=require("express");
const Cart = require("../models/Cart");
const { addToCart, updateCart, deleteCart, getCartProductst } = require("../controller/cartController");
const { isAuthenticate } = require("../middlewear/tokenAuth");

const router=express.Router();
router.post("/addtocart",isAuthenticate,addToCart);
router.put('/updateCart/:ProductId',isAuthenticate,updateCart);
router.delete('/deleteCart/:productId',isAuthenticate,deleteCart);
router.get('/getcartproducts',isAuthenticate,getCartProductst)

module.exports=router;