const Joi = require('joi');
const mongoose = require('mongoose');
const Category = require('./category');

const productSchema = new mongoose.Schema({
    name: {
        type: String,
        minlength: 3,
        maxlength: 50,
        required: true
    },
    price: {
        type: Number,
        min: 0,
        required: true
    },
    image: {
        type: String,
        minlength: 3,
        maxlinght: 50,
        required: true
    },
    description: {
        type: String,
        minlength: 3,
        maxlength: 50,
        required: true
    },
    categoryId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Category',
        required: true
    }
})

const Product = mongoose.model('Product', productSchema);

function validateProduct(product) {
    const schema = {
        name: Joi.string().min(3).max(50).required(),
        price: Joi.number().min(0),
        image: Joi.string().min(3).max(50).required(),
        description: Joi.string().min(3).max(55).required(),
        categoryId: Joi.objectId().required()
    }

    return Joi.validate(product, schema)
}

exports.Product = Product;
exports.validateProduct = validateProduct