const express=require('express');

const router=express.Router()
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
const { userRegistration , userLogin, userLogout, forgotPassword, resetPassword} = require('../controller/authController');


router.post('/register',userRegistration);  
router.post('/login',userLogin);
router.get('/logout',userLogout);
router.post('/password/forgot',forgotPassword);
router.put('/password/reset/:token',resetPassword);
//router.put('/password/update',updatePassword);



module.exports=router;