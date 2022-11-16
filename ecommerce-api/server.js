const express = require('express')
const app = express()
const port = process.env.PORT|| 5000;
const connect= require('./db/connect');
const cors= require('cors');
const productsRouter= require('./routes/products');
const request= require('request');
const authRouter = require('./routes/auth');
const session= require('express-session');
const { default: mongoose } = require('mongoose');
//const OrderRouter = require('./routes/order');
const orderRouter= require('./routes/order')
//const mongoStore=require('connect-mongo')(session())
app.use(express.json());

connect('mongodb://127.0.0.1:27017/ecommerce'||process.env.MONGO_URI);


app.use('/api/v1',productsRouter);
app.use('/api/v1',authRouter);
app.use('/api/v1',orderRouter);

app.listen(port, () => console.log(`Example app listening on port ${port}!`))