const asyncawaitError = require("../middlewear/asyncawaitError.js");
const Cart = require("../models/Cart.js");
const User = require("../models/Cart.js");
const createError = require("../utils/errorHendler.js");

const addToCart = asyncawaitError(async (req, res, next) => {
    if (!req.user.id) {
        return next(new createError("login please", 401));
    }
    const { ProductId, quantity, color, FinalPrice, size } = req.body;

    // console.log(req.user.id);

    const newCart = new Cart({
        ProductId, quantity, color, FinalPrice, size,
        userId: req.user.id,
    });

    const createdCart = await newCart.save();

    if (!createdCart) {
        return next(new createError("error in adding product to cart", 401));
    }

    res.status(200).json({
        success: true,
        createdCart,
        message: "Added to cart successfully"
    });


});
const deleteCart = asyncawaitError(async (req, res, next) => {
    if (!req.user.id) {
        return next(new createError("login please", 401));
    }
    const result = await Cart.deleteOne({ _id: req.params.productId });

    if (result.deletedCount === 0) {
        return next(new createError('No such user found', 401));
    }

    res.status(201).json({
        success: true,
        message: 'User deleted successfully',
    });

});
const updateCart = asyncawaitError(async (req, res, next) => {
    if (!req.user.id) {
        return next(new createError("login please", 401));
    }
       

     const quantity = parseInt(req.params.quantity, 10);

    const cartitm =await Cart.findOne({ userId:req.user.id, ProductId: req.params.ProductId });

    if (!cartitm) {
        return next(new createError("Cart item not found", 404));
      }
     
    
    console.log(cartitm,"aftersave");
    await cartitm.save();

    res.status(200).json({
        success: true,
        messege: "success",cartitm
    })


});
const getCartProductst = asyncawaitError(async (req, res, next) => {
    if (!req.user.id) {
        return next(new createError("login please", 401));
    }
    const cartitems = await Cart.find({ userId: req.user.id }).populate("ProductId");

    if (!cartitems) {
        res.status(200).json({ messege: "Cart is empty go and shop now" });
    }
    res.status(201).json({
        success: true,
        cartitems
    });

});



module.exports = {
    addToCart, deleteCart, updateCart, getCartProductst
}
