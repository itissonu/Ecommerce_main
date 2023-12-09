
const express = require('express');
const { newOrder, singleOrder, allorders, deleteAOrder, updateAOrder } = require('../controller/orderController');
const { isAuthenticate, isAuthorise } = require('../middlewear/tokenAuth');

const router = express.Router();

router.post('/newOrder', isAuthenticate, newOrder);
router.get('/orders/singleOrder/:id', isAuthenticate, isAuthorise("admin"), singleOrder);
router.get('/userallorders', isAuthenticate, allorders);
router.delete('/deleteorder/:orderId', isAuthenticate, isAuthorise("admin"), deleteAOrder);
//adminupdate
router.put('/admin/updateOrder/:orderId', isAuthenticate, isAuthorise("admin"), updateAOrder);


module.exports = router;