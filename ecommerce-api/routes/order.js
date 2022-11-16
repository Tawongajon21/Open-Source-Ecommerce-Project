const express= require('express');
const { createOrder, getOrders } = require('../controllers/Order');
const { isAuth } = require('../utils/utils');

const orderRouter=express.Router();


orderRouter.post('/create-order',
isAuth,
async(req,res)=>{
    if (req.body.orderItems.length===0) {
        res.status(400).send('Cart Is Empty')
    }
    else{
        const order=   new Order({
            orderItems:req.body.orderItems,
            shippingAddress:req.body.shippingAddress,
            paymentMethod:req.body.paymentMethod,
            itemsPrice:req.body.itemsPrice,
            taxPrice:req.body.taxPrice,
            shippingPrice:req.body.shippingPrice,
           user:req.user._id
        })
        const createdOrder= order.save();
        res.status(201).send({order:createdOrder,message:"Order Created"})
    }})
orderRouter.get('/get-orders',
isAuth,
async(req,res)=>{
    const email= req.body.email;
const orders=await  Order.find(email);
try {
    res.json({message:'Orders ',orders:orders})
} catch (error) {
   res.send(error)
}
}
);

module.exports=orderRouter

