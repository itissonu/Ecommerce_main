const mongoose = require('mongoose');
const validator = require("validator");

const userSchema = new mongoose.Schema({
   name: {
        type: String,
        required: [true, "Enter a name"],
    },
    email: {
        type: String,
        unique: true,      
        required: [true, "Enter a email"],
        validate: [validator.isEmail, "Please Enter a valid Email"],
    },
    password: {
        type: String,
        required: true,
        minlength: [8, "Password should be greater than 8 characters"],

    },
    profilePhoto: {
        type: String,
        required: true,
    },
    role: {
        type: String,
        default: "user",
    },
    createdAt: {
        type: Date,
        default: Date.now,
    },

   resetPasswordToken: String,
    resetPasswordExpire: Date,  
  
})
const User = mongoose.model("User", userSchema);
module.exports = User;