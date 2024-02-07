//add route in index.js 
const express=require("express");

const { addToWishlist,  removeWishlist,getallWishlistelements } = require("../controller/wishlistController");
const { isAuthenticate } = require("../middlewear/tokenAuth");

const router=express.Router();
router.post("/addtowishlist",isAuthenticate,addToWishlist);
router.delete('/deletewishlist/:productId',isAuthenticate,removeWishlist);
router.get("/getallwishlist",isAuthenticate,getallWishlistelements);

module.exports=router;