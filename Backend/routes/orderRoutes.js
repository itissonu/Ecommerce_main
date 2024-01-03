
const express = require('express');
const { newOrder, singleOrder, allorders, deleteAOrder, updateAOrder ,allordersAdmin} = require('../controller/orderController');
const { isAuthenticate, isAuthorise } = require('../middlewear/tokenAuth');
const { checkout, paymentverification } = require('../controller/paymentController');

const router = express.Router();

router.post('/newOrder', isAuthenticate, newOrder);
router.get('/orders/singleOrder/:id', isAuthenticate, isAuthorise("admin"), singleOrder);
router.get('/userallorders', isAuthenticate, allorders);
router.get('/admin/userallorders', isAuthenticate,isAuthorise("admin"), allordersAdmin);
router.delete('/deleteorder/:orderId', isAuthenticate, isAuthorise("admin"), deleteAOrder);
//adminupdate
router.put('/admin/updateOrder/:orderId', isAuthenticate, isAuthorise("admin"), updateAOrder);
router.post('/orders/checkout',checkout)
router.post('/orders/paymentverification',paymentverification)


module.exports = router;