const errorHendler=require('../utils/errorHendler');

module.exports=(err,req,res,next)=>{
    err.statusCode = err.statusCode || 500;
    err.message = err.message || "Internal Server Error";

    
  if (err.code === 11000) {
    const message = `Duplicate ${Object.keys(err.keyValue)} Entered`;
    err = new errorHendler(message, 400);
  }

  
  if (err.name === "JsonWebTokenError") {
    const message = `Json Web Token is invalid, Try again `;
    err = new errorHendler(message, 400);
  }

 
  if (err.name === "TokenExpiredError") {
    const message = `Json Web Token is Expired, Try again `;
    err = new errorHendler(message, 400);
  }

  res.status(err.statusCode).json({
    success: false,
    
    message: err.message,});
    return;

};