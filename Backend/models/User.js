const mongoose = require('mongoose');
const validator = require("validator");
const bcrypt = require("bcryptjs");
const crypto=require('crypto');

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
    
  
});
userSchema.pre('save', async function (next) {
   
     if (!this.isModified('password') && !this.isModified('email')) {
        return next();
    }

    if (this.isModified('email')) {
        if (!validator.isEmail(this.email)) {
            throw new Error('Please enter a valid email address');
        }
    }
    if (this.isModified('password')) {
        if (this.password.length < 8) {
            throw new Error('Password should be greater than 8 characters');
        }
       
    }

    // Hash the password
    if (this.isModified('password')) {
        this.password = await bcrypt.hash(this.password, 10);
    }
    
    next();
});

userSchema.methods.getResetPasswordToken = function () {
        
    const resetToken = crypto.randomBytes(20).toString("hex");
  
    // Hashing and adding resetPasswordToken to userSchema
    this.resetPasswordToken = crypto
      .createHash("sha256")
      .update(resetToken)
      .digest("hex");
  
    this.resetPasswordExpire = Date.now() + 15 * 60 * 1000;   //after 15 minutes the resettoken will expire
  
    return resetToken;
  };
const User = mongoose.model("User", userSchema);
module.exports = User;