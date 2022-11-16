const express= require('express');
const { ChangePassword, UpdateProfile } = require('../controllers/ChangePassword');
const { Login } = require('../controllers/login');
const { Logout } = require('../controllers/Logout');
const authRouter= express.Router();

const { register } = require('../controllers/registerUser');
const userModel = require('../models/users');
const bcrypt=require('bcrypt');
const { generateToken } = require('../utils/utils');
authRouter.post('/register-user',async(req,res)=>{
       

    const user=await  userModel({
        
        name:req.body.name,
        surname:req.body.surname,
        password:req.body.password,
        email:req.body.email,
      
          password:bcrypt.hashSync(req.body.password,8),
          
        },
         
 

)
const createdUser= await user.save();
{
    /**   res.send({
    _id:user._id,
    name:user.name,
    email:user.email,
   
    token:generateToken(createdUser)
})*/
}


   res.status(201).json({user:{
    name:user.username,
   
    _id:user._id,
    number:user.number,
    email:user.email,
    role:user.role,
    },token:generateToken(createdUser),msg:"User Created Succesfully"});

})
authRouter.post('/login-user',async(req,res)=>{
    const user= await userModel.findOne({email:req.body.email});
    console.log(user);

    if (user) {
        if (bcrypt.compareSync(req.body.password,user.password)) {
            res.send({
                _id:user._id,
                name:user.username,
                email:user.email,
                role:user.role,
             
               
             
              
                
                token:generateToken(user)
            })
            return 
        }
    }
    res.status(401).send({message:"invalid password or email"})
});
authRouter.get('/logout-user',Logout);



module.exports=authRouter