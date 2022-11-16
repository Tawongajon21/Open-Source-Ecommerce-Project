const express= require('express');
const { ChangePassword, UpdateProfile } = require('../controllers/ChangePassword');
const { Login } = require('../controllers/login');
const { Logout } = require('../controllers/Logout');
const authRouter= express.Router();

const { register } = require('../controllers/registerUser');

authRouter.post('/register-user',register)
authRouter.post('/login-user',Login);
authRouter.get('/logout-user',Logout);



module.exports=authRouter