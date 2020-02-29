const products = require('../models/products')


//Add products

const addProduct = async (payLoad) => {
    console.log("Add product")
    try {
        console.log("addProduct")
        console.log("......................"+payLoad+"........................................")
        let productData = await products.create(payLoad);
        return productData
    } catch (error) {
        console.error(error)
        throw error;
    }
}


//Get All Products

const getAllUsers = async () => {
    console.log("Get all products")
    try {
        console.log("getAllRegistration")
        let productData = await products.find();
        return productData;
    } catch (error) {
        console.error(error)
        throw error;
    }
}


module.exports = { addProduct, getAllUsers }