const express= require('express');
const Product= require('../models/products')
const Cart= require('../models/cart')
exports.AddToCart=async()=>{
  const Carts=await Cart.find().populate({
      path:'items.productId',
      select: "name price total"
  });
  return carts[0];
}

exports.Additem=async payload=>{
const newItem=await Cart.create(payload);
return newItem
}