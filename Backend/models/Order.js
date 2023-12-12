const mongoose = require('mongoose');

const orderSchema = new mongoose.Schema({
    personInfo: {
        address: {
            type: String,
            required: true,
        },
        city: {
            type: String,
            required: true,
        },

        state: {
            type: String,
            required: true,
        },

        country: {
            type: String,
            required: true,
        },
        pinCode: {
            type: Number,
            required: true,
        },
        phoneNo: {
            type: Number,
            required: true,
        },
    },
    orderItems: [
        {
            price: {
                type: Number,
                required: true,
            },
            quantity: {
                type: Number,
                required: true,
            },
            size: {
                type: String,
                default: "M"
            },
            image: {
                type: String,
                required: true,
            },
            product: {
                type: mongoose.Schema.ObjectId,
                ref: "Product",
                required: true,
            },
        },
    ],
    userId: {
        type: mongoose.Schema.ObjectId,
        ref: "User",
        required: true,
    },
    paymentInfo: {
        id: {
            type: String,
            required: true,
        },
        status: {
            type: String,
            required: true,
        },
    }, 
    paidAt: {
        type: Date,
        required: true,
    },
    itemsPrice: {
        type: Number,
        required: true,
        default: 0,
    },
    taxPrice: {
        type: Number,
        required: true,
        default: 20,
    },
    shippingPrice: {
        type: Number,
        required: true,
        default: 20,
    },
    totalPrice: {
        type: Number,
        required: true,
        default: 0,
    },
    orderStatus: {
        type: String,
        required: true,
        default: "Processing",
    },
    deliveredAt: Date,

    createdAt: {
        type: Date,
        default: Date.now,
    },

});

module.exports = mongoose.model("Order", orderSchema);