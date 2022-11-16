const mongoose= require('mongoose');
const bcrypt=require('bcrypt')

const userSchema=new mongoose.Schema({
    name:{type:String,required:true},
    surname:{type:String,required:true},
    email:{type:String,required:true,unique:true},
    password:{type:String,required:true},
    isAdmin:{type:Boolean,default:false},
  created : {
    type: Date,
    default: Date.now
  }
})

const userModel= mongoose.model('Users',userSchema);

module.exports=userModel;

