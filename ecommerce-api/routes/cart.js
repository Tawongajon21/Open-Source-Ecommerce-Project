const express= require('express');
const { AddToCart } = require('../controllers/cart');
const cartRouter=express.Router();

cartRouter.get('/add-to-cart/:id',AddToCart)