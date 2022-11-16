const mongoose= require('mongoose');

const orderSchema= new mongoose.Schema({
    orderItems:[{
        name:{type:String,required:true},
        qty:{type:Number,required:true},
        image:{type:String,required:true},
        price:{type:Number,required:true},
        product:{type:mongoose.Schema.Types.ObjectId,
        ref:'productModel',required:true
        }
    }],
    shippingAddress:{
        fullName:{type:String,required},
        address:{type:String,required},
        city:{type:String,required},
        postalCode:{type:String,required},
        country:{type:String,required},
    },
    paymentMethod:{
        type:String,required:true
    },
    itemsPrice:{type:Number,required:true},
    shippingPrice:{type:Number,required:true},
    taxPrice:{type:Number,required:true},
    totalPrice:{type:Number,required:true},
     user:{type:mongoose.Schema.Types.ObjectId,ref:'userModel',required:true}
,isPaid:{type:Boolean,default:false},
paidAt:{type:Date},
isDelivered:{type:Boolean,default:false},
deliveredAt:{type:Date},
    })


    const Order= mongoose.model('Order',orderSchema);
    module.exports= Order;