const mongoose=require('mongoose');

const wishlistSchema=mongoose.Schema({
    ProductId:{
        type: mongoose.Schema.Types.ObjectId,
        ref: "Product",
        required:true,
    },
    userId:{
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        required:true,
    },
    quantity:{
        type:Number,
        default:1,
    },
    size:{
        type:String,
        required:true,
        default:'M'
    },
    FinalPrice:{
        type:Number,
        required:true,
    }
});

module.exports=mongoose.model("Wishlist",wishlistSchema);