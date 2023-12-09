const asyncawaitError = require("../middlewear/asyncawaitError");
const Order = require("../models/Order");
const createError = require("../utils/errorHendler")


const newOrder = asyncawaitError(async (req, res, next) => {
    if (!req.user.id) {
        return next(new createError("please login", 401));
    }
    const { personInfo,
        orderItems,
        paymentInfo,
        paidAt,
        itemsPrice,
        taxPrice,
        shippingPrice,
        totalPrice
    } = req.body;

    const order = new Order({
        personInfo,
        orderItems,
        paymentInfo,
        paidAt,
        itemsPrice,
        taxPrice,
        shippingPrice,
        totalPrice,
        orderStatus,
        createdAt: Date.now(),
        userId: req.user.id,
    });

    const neworder = await order.save();

    if (!neworder) {
        return next(new createError("error in creating order"), 401);
    };
    res.status(201).json({
        success: true,
        neworder,
    });

})
//for admin to view a particular order
const singleOrder = asyncawaitError(async (req, res, next) => {
    if (!req.user.id) {
        return next(new createError("please login", 401));
    }

    const order = await Order.findById(req.params.id);

    if (!order) {
        return next(new createError("no order found"), 401);
    };
    res.status(201).json({
        success: true,
        order,
    });

});

//for user to view his all orders
const allorders = asyncawaitError(async (req, res, next) => {

    if (!req.user.id) {
        return next(new createError("please login", 401));
    }
    const allorders = await Order.find({ userId: req.user.id });

    if (!allorders) {
        return next(new createError("no order found"), 401);
    };
    res.status(201).json({
        success: true,
        allorders,
    });

})

const deleteAOrder = asyncawaitError(async (req, res, next) => {

    const result=await Order.deleteOne(req.params.orderId);

    if(result.deletedCount === 0) {
        return next(new createError('item already deleted', 401));
    }
    res.status(201).json({
        success: true,
        message: 'order deleted successfully',
    });

})

const updateAOrder = asyncawaitError(async (req, res, next) => {

})

module.exports = { newOrder, singleOrder, allorders, deleteAOrder, updateAOrder }