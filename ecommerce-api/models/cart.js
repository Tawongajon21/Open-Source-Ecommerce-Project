const mongoose=require('mongooose');

const ItemSchema= new mongoose.Schema({
   productId:{ref:"Product",type:mongoose.Schema.Types.ObjectId},
  
    name:{type:String,required:true},
    quantity:{type:Number,min:1},
    price:{type:Number},
    total:{type:Number,default:0}
});

const CartSchema = new Schema({
    items: [ItemSchema],
    subTotal: {
        default: 0,
        type: Number
    }
}, {
    timestamps: true
})
const Cart= mongoose.model('Cart',CartSchema);
module.exports=Cart;