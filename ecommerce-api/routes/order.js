const express= require('express');
const { Order, Orders } = require('../controllers/Order');
const { isAuth } = require('../utils/utils');

const OrderRouter=express.Router();


OrderRouter.post('/create-order',isAuth,Order);
OrderRouter.get('/get-orders',isAuth,Orders);

module.exports=OrderRouter

