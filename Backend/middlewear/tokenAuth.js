const User = require("../models/User");
const createError = require("../utils/errorHendler");
const asyncawaitError = require("./asyncawaitError");
const jwt = require("jsonwebtoken");


exports.isAuthenticate = asyncawaitError(async (req, res, next) => {
//console.log(req.cookies)
  const { token } = req.cookies;
//  console.log(token)
  if (!token) {
    console.log("yes")
    return next(new createError("please log in for these action", 401))
  }
  const data = jwt.verify(token
    , "soumyaranjansahu");
  
  req.user = await User.findById(data._id);
  next()
});


exports.isAuthorise = (...roles) => {
  return (req, res, next) => {
    //console.log(req.user.role)
    if (!roles.includes(req.user.role)) {
      return next(new createError(`Role: ${req.user.role} is not allowed to access this resouce`, 403))
    }
    next();
  };
};

