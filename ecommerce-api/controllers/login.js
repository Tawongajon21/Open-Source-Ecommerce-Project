const mongoose=require('mongoose');
const bcrypt=require('bcrypt');
const userModel=require('../models/users');
const generateToken= require('../utils/utils')
const secret="nfoergnerogner0bgorbeupgbrpubvjljrepvuebveru9bger9gbsvre99r9gbebergre" ||process.env.SECRET_SOMETHING;
exports.Login=async (req,res)=>{

const user=await userModel.findOne({email:req.body.email});
if (!user) {
    return res.json({message:"Invalid Email or Password"})
}
if (user) {
  if (bcrypt.compareSync(req.body.password,user.password)) {
      res.send({
          id:user._id,
          email:user.email,
          name:user.name,
          surname:user.surname,
          isAdmin:user.isAdmin,
          token:generateToken(user)
      });
      return 
  } 

}
res.status(401).send({message:'Invalid email or password'})

   
}