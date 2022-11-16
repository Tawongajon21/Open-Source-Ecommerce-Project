const express= require('express');
const { GetProduct, GetProducts, SearchProduct, EditProduct, AddProduct, DeleteProduct } = require('../controllers/Products');
const productsRouter=express.Router();



productsRouter.get('/products',GetProducts);
productsRouter.get('/product/:id',  GetProduct);
productsRouter.put('/product/:id',EditProduct);
productsRouter.delete('/product/:id',DeleteProduct);
productsRouter.post('/add-product',AddProduct)

//productsRouter.post('/searchquery',SearchProduct);

module.exports= productsRouter;