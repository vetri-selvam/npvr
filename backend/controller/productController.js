const productModel = require("../models/productModel");

// Get Products API - /api/v1/products
exports.getProducts = async (req, res, next) => {
    const query = req.query.keyword?{
        name: {
            $regex: req.query.keyword,
            $options: 'i'
        }
    }:{}

    const products = await productModel.find(query); // passing empty object i.e. getting all properties
    res.json({
        success: true,
        products,
        // message: 'Get products working!'
    });
};

// Get Single Product API - /api/v1/products
exports.getSingleProducts = async (req, res, next) => {
    try {
        const product = await productModel.findById(req.params.id);
        res.json({
            success: true,
            product,
        });
    } catch (error) {
        res.status(404).json({
            success: false,
            message: "Unable to get Product with that ID",
        });
    }
};
