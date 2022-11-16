require('dotenv').config();
const connectDB= require('./db/connect')
const Product= require('./models/products');


const products= require('./data');

const start=async ()=>{
    try {
        await connectDB('mongodb://127.0.0.1:27017/ecommerce');
        await Product.deleteMany();
        await Product.create(products)
        console.log(`succes`);
        process.exit();
    } catch (error) {
        console.log(error);
        process.exit(1);
    }
}



start()