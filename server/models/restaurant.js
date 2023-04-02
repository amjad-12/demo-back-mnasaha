const Joi = require('joi');
const mongoose = require('mongoose')

const restaurantSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        minlength: 3,
        maxlinght: 50,
    }
})

const Restaurant = mongoose.model('Restaurant', restaurantSchema);

function validateRestaurant(restaurant) {
    const schema = {
        name: Joi.string().min(3).max(50).required(),
    };

    return Joi.validate(restaurant, schema)
}

exports.Restaurant = Restaurant;
exports.validateRestaurant = validateRestaurant;