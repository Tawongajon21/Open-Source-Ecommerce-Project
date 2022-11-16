const mongoose= require('mongoose');

const productSchema=new mongoose.Schema({
    name:{type:String,required:true},
    delivery:{type:String,required:true},
    brand:{type:String,required:true},
    category:{type:String,required:true},
    specs:{type:[String],required:true},
    price:{type:Number,required:true},
    otherPhotos:{type:[String],required:true},
    mainPhoto:{type:String,required:true}

},
{
    timestamps:true
}
)
const productModel= mongoose.model('Product',productSchema);
module.exports=productModel;