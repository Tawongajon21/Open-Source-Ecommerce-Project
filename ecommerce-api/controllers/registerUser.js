const mongoose = require('mongoose');
const bcrypt=require('bcrypt');
const userModel= require('../models/users')

 exports.register= async (req,res) =>{
    
  const {name,surname,email,password:plainTextPassword}=req.body;
  const password=await bcrypt.hash(plainTextPassword,8);
  console.log(await bcrypt.hash(plainTextPassword,8));

if (password.length<8) {
    return res.json({status:`Error`,message:" password should have at least 8 characters"})
}
    try {
 const newUser=       await userModel.create({
            name,surname,email,password
        })
        console.log(newUser+`added`);
        res.json({message:`User Added succesfully`})
    } catch (error) {
        console.log(error);
        res.json({message:error})
    }
 }

