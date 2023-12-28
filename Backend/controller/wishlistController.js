const asyncawaitError = require("../middlewear/asyncawaitError.js");
const Wishlist = require("../models/Wishlist.js")
const createError = require("../utils/errorHendler.js");

const addToWishlist = asyncawaitError(async (req, res, next) => {
    if (!req.user.id) {
        return next(new createError("login please", 401));
    }
    const { ProductId, FinalPrice } = req.body;
    const newWishlist = new Wishlist({
        ProductId,
         FinalPrice,
        userId: req.user.id,
    });
    const createdWishlist = await newWishlist.save();
    if (!createdWishlist) {
        return next(new createError("error in adding product to Wishlist", 401));
    }
    const wishlistitems = await Wishlist.find({ userId: req.user.id }).populate("ProductId");

    res.status(200).json({
        success: true,
        wishlistproduct:wishlistitems,
        message: "Added to Wishlist successfully"
    });

});

const removeWishlist = asyncawaitError(async (req, res, next) => {
    if (!req.user.id) {
        return next(new createError("login please", 401));
    }
    
   const result = await Wishlist.deleteOne({ ProductId: req.params.productId });

    if (result.deletedCount === 0) {
        return next(new createError('No such product found', 401));
    }
    const wishlistitems = await Wishlist.find({ userId: req.user.id }).populate("ProductId");
    
    res.status(201).json({
        success: true,
        message: 'wishlist removed successfully',
        wishlistproduct:wishlistitems
    });
})

const getallWishlistelements = asyncawaitError(async (req, res, next) => {
    if (!req.user.id) {
        return next(new createError("login please", 401));
    }
    const wishlistitems = await Wishlist.find({ userId: req.user.id }).populate("ProductId");
    if (wishlistitems.length === 0) {
      return  res.status(201).json({
            success: true,
            message: "no product found go and shop now",
            wishlistproduct:wishlistitems
        });
    }
    if (!wishlistitems) {
        res.status(200).json({ messege: "Cart is empty go and shop now" });
    }

    res.status(201).json({
        success: true,
        wishlistproduct: wishlistitems
    });

})
module.exports = {
    addToWishlist, removeWishlist, getallWishlistelements
}