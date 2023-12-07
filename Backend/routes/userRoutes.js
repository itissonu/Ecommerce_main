const express=require('express');
const { upadateUser, allUser, getSingleUser, deleteUser, getUserDetails } = require('../controller/userController');
const { isAuthenticate, isAuthorise } = require('../middlewear/tokenAuth');

const router=express.Router();

router.get('/me',isAuthenticate,getUserDetails);
router.put('/me/update',isAuthenticate,upadateUser);
router.get('/admin/users',isAuthenticate,isAuthorise("admin"),allUser);
router.get('/admin/user/:id',isAuthenticate,isAuthorise("admin"),getSingleUser);
router.delete('/admin/user/:id',isAuthenticate,isAuthorise("admin"),deleteUser)

module.exports=router;