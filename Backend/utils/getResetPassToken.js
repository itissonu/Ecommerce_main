const crypto=require('crypto');

const getResetPasswordToken =async()=>{
    const token= await crypto.randomBytes(20).toString("hex");

    return token
}
module.exports=getResetPasswordToken;