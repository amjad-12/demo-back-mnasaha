const express = require('express')
const error = require('../middleware/error')
const restaurants = require('../routes/restaurants')

module.exports = function(app) {
    app.use(express.json())
    app.use('/api/restaurants',restaurants)
    app.use(error)
}