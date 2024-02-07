const asyncawaitError = require("../middlewear/asyncawaitError");
const Order = require("../models/Order");
const Product = require("../models/Product");
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
        orderStatus,
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
        ordersitem:neworder,
    });

})
//for admin to view a particular order
const singleOrder = asyncawaitError(async (req, res, next) => {
    if (!req.user.id) {
        return next(new createError("please login", 401));
    }

    const order = await Order.findById(req.params.id).populate("userId",
        "name email");

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
    const allorders = await Order.find({ userId: req.user.id }).populate("orderItems.product");

    if (!allorders) {
        return next(new createError("no order found"), 401);
    };
    res.status(201).json({
        success: true,
        ordersitem:allorders,
    });

})
//all orders for admin
const allordersAdmin = asyncawaitError(async (req, res, next) => {

    if (!req.user.id) {
        return next(new createError("please login", 401));
    }
    const allorders = await Order.find();

    if (!allorders) {
        return next(new createError("no order found"), 401);
    };
    res.status(201).json({
        success: true,
        ordersitem:allorders,
    });

})

const deleteAOrder = asyncawaitError(async (req, res, next) => {

    console.log(req.params.orderId);
    const result = await Order.deleteOne({ _id: req.params.orderId });

    if (result.deletedCount === 0) {
        return next(new createError('item already deleted', 401));
    }
    res.status(201).json({
        success: true,
        message: 'order deleted successfully',
    });

})

const updateAOrder = asyncawaitError(async (req, res, next) => {

   // console.log(req.params.orderId)
    const order = await Order.findById(req.params.orderId);

    if (!order) {
        return next(new createError("order not found ", 401));
    }

    if (order.orderStatus === "Delivered") {
        return next(new createError("item already delevered ", 401));
    }
    if (order.orderStatus === "Shipped") {
        return next(new createError("item already shipped ", 401));
    }

    if (req.body.orderStatus === "Shipped") {
        await Promise.all(order.orderItems.map(async (ord) => {
            console.log(`Updating stock for product ${ord.product} with quantity ${ord.quantity}`);
            await updatestock(ord.product, ord.quantity);
        }));
    }

    order.orderStatus = req.body.orderStatus;

    if (req.body.orderStatus === "Delivered") {
        order.deliveredAt = Date.now();
    }

    await order.save({ validateBeforeSave: false })

    res.status(200).json({
        success: true,
        messege: "updated"
    });


});

async function  updatestock(id, quantity) {
    const product = await Product.findById(id);
    if (!product) {
        console.error(`Product not found for ID: ${id}`);
        throw new createError("Product not found", 404);
    }
    product.Stock -= quantity;
    console.log(`Found product  for ID ${id}`);

    await product.save({ validateBeforeSave: false });
  
   
}

module.exports = { newOrder, singleOrder, allorders, deleteAOrder, updateAOrder, allordersAdmin }