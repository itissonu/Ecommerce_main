const asyncawaitError = require("../middlewear/asyncawaitError.js");
const User = require("../models/User");
const generateAuthToken = require('../utils/JWTtoken.js');
const bcrypt = require("bcryptjs");
const createError = require("../utils/errorHendler.js");
const sendEmail = require("../utils/mail.js");
const crypto = require('crypto');

const userRegistration = asyncawaitError(async (req, res, next) => {

    const { name, password, email, profilePhoto } = req.body;

    const newUser = new User({
        name,
        password,
        email,
        profilePhoto,     //in frontend url conversion
    });
    await newUser.save();


    const token = await generateAuthToken(newUser);
    res.cookie("token", token, {
        expires: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000),
        httpOnly: true,
        secure: true,         // Set to true when using HTTPS
    sameSite: 'None',
    }).status(201).json({
        success: true,
        user: {
            name: newUser.name,
            email: newUser.email,
        }, token,
    });

});


const userLogin = asyncawaitError(async (req, res, next) => {
    
    const { email, password } = req.body;
    if (!email || !password) {
        return next(new createError("please enter email and password", 400))
    }
    const user = await User.findOne({ email: email })
    if (!user) {
        return next(new createError("No user found "), 401)
    }
    if (!await bcrypt.compare(password, user.password)) {
        return next(new createError("Password did not matched"), 401)
    }
    const token = await generateAuthToken(user);
    res.cookie("token", token, {
        expires: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000),
        httpOnly: true,
        secure: true,         // Set to true when using HTTPS
    sameSite: 'None',
    }).status(200).json({
        success: true,
        user,
        role: user.role,
        message: "login success", token,
    })
});

const userLogout = asyncawaitError(async (req, res, next) => {
    res.cookie("token", null, {
        expires: new Date(Date.now()),
        httpOnly: true,
        sameSite: 'None',
        secure: true, 
    })
    res.status(200).json({
        success: true,
        message: "logged out",
    })
});

const forgotPassword = asyncawaitError(async (req, res, next) => {

    const { email } = req.body;
    const user = await User.findOne({ email: email });
    console.log(user);
    if (!user) {
        return next(new createError("user not found", 404))
    }

    const resetToken = user.getResetPasswordToken();
    
    await user.save({ validateBeforeSave: false });

    const resetPasswordUrl = `http://localhost:3000/password/reset/${resetToken}`;
    const message = `Your password reset token is :- \n\n ${resetPasswordUrl} \n\nIf you have not requested this email then, please ignore it.`;
    try {
        await sendEmail({
            email: user.email,
            subject: ` Password Recovery`,
            message,
        });

        res.status(200).json({
            success: true,
            message: `Email sent to ${user.email} successfully`,
        });
    } catch (error) {
        user.resetPasswordToken = undefined;   //it need to be done bcz in those place something would be placed
        user.resetPasswordExpire = undefined;

        await user.save({ validateBeforeSave: false });

        return next(new createError(error.message, 500));
    }
})

const resetPassword = asyncawaitError(async (req, res, next) => {

    const resetPasswordToken = crypto
        .createHash("sha256")
        .update(req.params.token)
        .digest("hex");

    const user = await User.findOne({ resetPasswordToken: resetPasswordToken, resetPasswordExpire: { $gt: Date.now() }, })

    if (!user) {
        return next(new createError("Reset Password Token is invalid or has been expired",
            400));
    };
    if (req.body.password !== req.body.confirmPassword) {
        return next(new createError("Password does not same as confirm password", 400));
    }
    user.password = req.body.password;
    user.resetPasswordToken = undefined;
    user.resetPasswordExpire = undefined;
    await user.save()
    const token = await generateAuthToken(user);
    res.cookie("token", token, {
        expires: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000),
        httpOnly: true,
        secure: true,         // Set to true when using HTTPS
    sameSite: 'None',
    }).status(200).json({
        success: true,
        message: "login success", token,
    })
})


module.exports = {
    userRegistration,
    userLogin,
    userLogout,
    forgotPassword,
    resetPassword,

};