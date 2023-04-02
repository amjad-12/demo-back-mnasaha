const Joi = require('joi');
Joi.objectId = require('joi-objectid')(Joi);
const mongoose = require('mongoose');
const express = require('express')
const app = express()


require('./startup/routes')(app)


mongoose.connect('mongodb://127.0.0.1/manasah')
    .then(() => console.log('Connected to MongoDB'))
    .catch(err => console.log('Could not connect', err))


app.listen(3000, () => console.log('Listening'))