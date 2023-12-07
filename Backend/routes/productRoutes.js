const express=require('express');
const { createNewproduct, getallproducts, allproduct, updateProduct, deleteProduct, getProductDetails, createReveiw, allreviews, deleteReview } = require('../controller/productController');
const { isAuthenticate, isAuthorise } = require('../middlewear/tokenAuth');

const router=express.Router();

router.post('/admin/newProduct',isAuthenticate,isAuthorise("admin"),createNewproduct);
router.get('/allproducts',getallproducts);
router.get('/admin/allproduct',isAuthenticate,isAuthorise("admin"),allproduct);
router.put('/admin/update/:id',isAuthenticate,isAuthorise("admin"),updateProduct);
router.delete('/admin/delete/:id',isAuthenticate,isAuthorise("admin"),deleteProduct);
router.get('/products/:id',getProductDetails);
router.put('/review/new',isAuthenticate,createReveiw);  //if you have given you can update elese you can add a review
router.get('/review/all',allreviews);
router.delete('/review',deleteReview);


module.exports=router;