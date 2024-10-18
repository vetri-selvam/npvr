const  productModel = require("../models/productModels");

exports.getProducts = async(req, res, next) =>{

    const products = await productModel.find({});  // passing empty object i.e. getting all properties
    res.json(
        {
            success: true,
            products
            // message: 'Get products working!'
        }
    )
}

exports.getSingleProducts = (req, res, next) =>{
    res.json(
        {
            success: true,
            message: 'Get single products working!'
        }
    )
}