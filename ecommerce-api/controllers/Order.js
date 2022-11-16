const Order= require('../models/Order');
const createOrder=async(req,res)=>{
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
}
}

const getOrders =async(req,res)=>{
    const email= req.body.email;
const orders=await  Order.find(email);
try {
    res.json({message:'Orders ',orders:orders})
} catch (error) {
   res.send(error)
}
}

module.exports={createOrder,getOrders}