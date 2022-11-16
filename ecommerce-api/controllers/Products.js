const productModel=require('../models/products')



exports.GetProducts=async(req,res)=>{
    const {name,delivery,brand,category,priceFilters}= req.query;
    const queryObject={};
    if (category) {
        queryObject.category={$regex:category,$options:'i'};

    }
    if (name) {
        queryObject.name={$regex:name,$options:'i'};

    }
    if (brand) {
        queryObject.brand={$regex:brand,$options:'i'};

    }
    if (delivery) {
        queryObject.delivery={$regex:delivery,$options:'i'};
    }
    if (delivery) {
        queryObject.delivery={$regex:delivery,$options:'i'};
    }
    if (priceFilters) {
        const operatorMap={
            '>':"$gt",
        '>=':"$gte",
        '=':"$eq",
        '<':"$lt",
        '<=':"$lte",
        }
        const regex= /\b(<|>|>=|=|<|<=)\b/g;
        let filters=priceFilters.replace(regEx, (match)=>`-${operatorMap[match]}-`);
        const options  = ['price'];
        filters= filters.split(',').forEach((item)=>{
            const [field,operator,value]= item.split('-');
            if (options.includes(field)) {
                queryObject[field]={[operator]:Number(value)}
            }
        })

    }
let result=await productModel.find(queryObject);
const page=Number(req.query.page)||1;
const limit=Number(req.query.limit)||10;

res.json({message:'Products Fetched Succesfully',result})
}

exports.GetProduct=async (req,res)=>{
    

    const id=req.params.id;
    const product=await productModel.find(queryObject);
    res.json({message:`Product ${id}`,product})
}

exports.EditProduct=async (req,res)=>{
    const id=req.params.id;
    try {
        const editedProduct=await productModel.findByIdAndUpdate(id,{$set:req.body},{new:true}); 

        res.status(201).json({message:'Product Edited Succesfully',editedProduct}) 
    } catch (error) {
        throw error
    }



}

exports.AddProduct=async(req,res)=>{
    try {
        const newProduct=await new productModel(req.body);
        
        newProduct.save().then(product=>res.send(`product added`))
        .catch(err=>console.log(err))
    } catch (error) {
        throw error
    }
}


exports.DeleteProduct=async(req,res)=>{
    const id= req.params.id;
    console.log(`hello`);

    try {
       const getProduct= await productModel.findByIdAndRemove(id,(err,data)=>{
           if (err) {
               return err
           } else {
            res.status(200).json({message:'Product Deleted Succesfully',data})
           }
       });
     
    } catch (error) {
        throw error
    }
}