const mongoose = require('mongoose')
const Schema = mongoose.Schema

let productSchema = new Schema({
    productName: String,
    specifications: {
            color: String,
            size: String,
            price: Number
    },
    createdAt: { type: Date, default: Date.now() }
})

module.exports = mongoose.model('productSchema', productSchema) 