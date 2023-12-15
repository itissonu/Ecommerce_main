const asyncawaitError = require("../middlewear/asyncawaitError");
const User = require("../models/User");
const createError = require("../utils/errorHendler");
//userdetails
const getUserDetails = asyncawaitError(async (req, res, next) => {
  const user = await User.findById(req.user.id)   //from userauth token id will come
  if (!user) {
    return next(new createError("user not found or login", 401));
  }
  res.status(201).json({ success: true, user })

})

//update the user(for user)
const upadateUser = asyncawaitError(async (req, res, next) => {
  const newUser = {
    name: req.body.name,
    email: req.body.email,
    profilePhoto: req.body.profilePhoto
  }

  const user = await User.findById(req.user.id);
  if (!user) {
    return next(new createError("please login to access",401))
  }
  const updateduser=await User.findByIdAndUpdate(req.user.id,newUser);
   await updateduser.save();
   res.status(201).json({
    success: true,
    messege:"user updated successfully"
  })
})

//get all existing user(admin only)
const allUser = asyncawaitError(async (req, res, next) => {
  const users = await User.find()
  res.status(201).
    json({ success: true, users })

})

//get a asked user(admin)
const getSingleUser = asyncawaitError(async (req, res, next) => {
  const user = await User.findById(req.params.id);
  if (!user) {
    return next(new createError("No such user found", 401))
  }
  res.status(201).json({
    success: true,
    user
  })
})


//delete an user(admin)
const deleteUser = asyncawaitError(async(req, res, next) => {
  const result = await User.deleteOne({ _id: req.params.id });

  if (result.deletedCount === 0) {
    return next(new createError('No such user found', 401));
  }
  
  res.status(201).json({
    success: true,
    message: 'User deleted successfully',
  });

})

module.exports = { getUserDetails, upadateUser, allUser, getSingleUser, deleteUser }