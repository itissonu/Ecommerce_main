const asyncawaitError = require("../middlewear/asyncawaitError.js");
const Cart = require("../models/Cart.js");
const User = require("../models/Cart.js");
const createError = require("../utils/errorHendler.js");

const addToCart = asyncawaitError(async (req, res, next) => {
    if (!req.user.id) {
        return next(new createError("login please", 401));
    }
    const { ProductId, quantity,  FinalPrice, size } = req.body;

    // console.log(req.user.id);

    const newCart = new Cart({
        ProductId, quantity,  FinalPrice, size,
        userId: req.user.id,
    });

    const createdCart = await newCart.save();

    if (!createdCart) {
        return next(new createError("error in adding product to cart", 401));
    }
    const cartitems = await Cart.find({ userId: req.user.id }).populate("ProductId");

    res.status(200).json({
        success: true,
        cartproduct:cartitems,
        message: "Added to cart successfully",
        createdCart
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
    const cartitems = await Cart.find({ userId: req.user.id }).populate("ProductId");

    res.status(201).json({
        success: true,
        message: 'cart deleted successfully',
        cartproduct:cartitems
    });

});
const updateCart = asyncawaitError(async (req, res, next) => {
    if (!req.user.id) {
        return next(new createError("login please", 401));
    }
       

    const cartitm =await Cart.findOne({ userId:req.user.id, _id: req.params.ProductId });

    if (!cartitm) {
        return next(new createError("Cart item not found", 404));
      }
      

      if(!parseInt(req.body.quantity, 10) && !req.body.size){
        return next(new createError("quantity or size need to update", 404));
      }

    
      if(req.body.size){
        cartitm.size=req.body.size;
        await cartitm.save();
      }

      console.log( parseInt(req.body.quantity, 10)|| 1)

      if(parseInt(req.body.quantity, 10))
      {
       cartitm.quantity= parseInt(req.body.quantity, 10);
       await cartitm.save();
      }
     
    
  
    
    const cartitems = await Cart.find({ userId: req.user.id }).populate("ProductId");

    res.status(200).json({
        success: true,
        messege: "success",
        cartproduct:cartitems,
        cartitm
    })


});
const getCartProductst = asyncawaitError(async (req, res, next) => {
    if (!req.user.id) {
        return next(new createError("login please", 401));
    }
    const cartitems = await Cart.find({ userId: req.user.id }).populate("ProductId");
        if(cartitems.length===0){
          return  res.status(201).json({
                success: true,
                message:"no prodcut found go and shop now",cartproduct: cartitems
                
            });
        }
    
    res.status(201).json({
        success: true,
        cartproduct:cartitems
    });

});



module.exports = {
    addToCart, deleteCart, updateCart, getCartProductst
}
