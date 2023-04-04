const Joi = require('joi');
const mongoose = require('mongoose');
const Restaurant = require('./restaurant');

const categorySchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        minlength: 3,
        maxlingth: 50,
    },
    image: {
        type: String,
        minlength: 3,
        maxlinght: 50,
        required: true
    },
    restaurantId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Restaurant',
        required: true
    }
})

const Category = mongoose.model('Category', categorySchema);

function validateCategory(category) {
    const schema = {
        name: Joi.string().min(3).max(50).required(),
        image: Joi.string().min(3).max(50).required(),
        restaurantId: Joi.objectId().required()
    }

    return Joi.validate(category, schema)
}

exports.Category = Category;
exports.validateCategory = validateCategory;