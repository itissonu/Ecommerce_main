const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    category: {
        type: String,
        required: true,
    },
    brand: {
        type: String,
        required: true,
    },
    price: {
        type: Number,
        required: true,
    },
    discount: {
        type: Number,
        default: 1,
    },

    Stock: {
        type: Number,
        default: 1,
    },
    ratings: [
        {
            user: {

                type: mongoose.Schema.Types.ObjectId,
                ref: "User",
                required: true,

            },
            name: {
                type: String,
                required: true,
            },
            rating: {
                type: Number,
                required: true,
            },
            comment: {
                type: String,
                required: true,
            },
        },
    ],
    totalRatings: {
        type: Number,
        default: 0
    },
    avgRatings: {
        type: Number,
        default: 0
    },
    images: [
        {
            url: {
                type: String,
                required: true,
            },
        },
    ],
    featuredProduct: {
        type: Boolean,
        default: false,
    },
    colors: [
        {
            type: String,
            default: null,
        }

    ],
    size: [
        {
            type: String,
            default: "S",
        }

    ],
    ageCategory:{
        type:String,
        default:"Others"
    },
    createdAt: {
        type: Date,
        default: Date.now,
    },
    tags: [
        {
            type: String,
           
        },
    ],


});

module.exports = mongoose.model('Product', productSchema)