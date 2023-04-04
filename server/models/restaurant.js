const Joi = require('joi');
const mongoose = require('mongoose')

const restaurantSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        minlength: 3,
        maxlinght: 55,
    },
    description: {
        type: String,
        required: true,
        minlength: 5,
        maxlinght:55
    },
    stars: {
        type:Number,
        min:0,
        max:5,
        required: true
    },
    image: {
        type: String,
        minlength: 3,
        maxlinght: 50,
        required: true
    }
})

const Restaurant = mongoose.model('Restaurant', restaurantSchema);

function validateRestaurant(restaurant) {
    const schema = {
        name: Joi.string().min(3).max(50).required(),
        description: Joi.string().min(3).max(55).required(),
        stars: Joi.number().min(0).max(5).required(),
        image: Joi.string().min(3).max(50).required()
    };

    return Joi.validate(restaurant, schema)
}

exports.Restaurant = Restaurant;
exports.validateRestaurant = validateRestaurant;