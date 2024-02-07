const mongoose=require('mongoose');

const cartSchema=mongoose.Schema({
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
        default:null
    },
    FinalPrice:{
        type:Number,
        required:true,
    }
});

module.exports=mongoose.model("Cart",cartSchema);