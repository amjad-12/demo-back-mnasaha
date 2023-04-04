const express = require('express')
const router = express.Router()
const mongoose = require('mongoose')
const {Restaurant, validateRestaurant} = require('../models/restaurant')
const {Category, validateCategory} = require('../models/category')
const {Product, validateProduct} = require('../models/product')

// API of /api/restaurants
router.get('/', async (req, res) => {
    const restaurants = await Restaurant.find();
    res.send(restaurants)
});

router.post('/', async (req, res) => {
    const { error } = validateRestaurant(req.body);
    if (error) return res.status(400).send(error.details[0].message);

    let restaurant = new Restaurant({
        name: req.body.name,
        description: req.body.description,
        stars: req.body.stars,
        image: req.body.image
    })
    
    restaurant = await restaurant.save()
    res.send(restaurant)
})


// API of /api/restaurants/:resId/categorys
router.get('/:resId/categorys',async (req, res) => {
    const categorys = await Category
        .find({ restaurantId: req.params.resId})
        .populate('restaurantId', 'name image description -_id')
    res.send(categorys)
})

router.post('/:resId/categorys', async (req, res) => {
    const { error } = validateCategory({
        name: req.body.name,
        image: req.body.image,
        restaurantId: req.params.resId
    });
    if (error) return res.status(400).send(error.details[0].message)

    let category = new Category({
        name: req.body.name,
        image: req.body.image,
        restaurantId: req.params.resId.toString()
    })

    category = await category.save()
    res.send(category)
})


// API of /api/restaurants/:resId/categorys/:catId/products
router.get('/:resId/categorys/:catId/products', async (req, res) => {
    const products = await Product
        .find({ categoryId: req.params.catId })
        .populate({
            path: "categoryId", // populate blogs
            populate: {
               path: "restaurantId", // in blogs, populate comments
            }
         })
        // .populate('categoryId', 'name image restaurantId -_id')
    res.send(products)
})

router.post('/:resId/categorys/:catId/products', async (req, res) => {
    const { error } = validateProduct({
        name: req.body.name,
        price: req.body.price,
        image: req.body.image,
        description: req.body.description,
        categoryId: req.params.catId
    });
    if (error) return res.status(400).send(error.details[0].message)

    let product = new Product({
        name: req.body.name,
        price: req.body.price,
        description: req.body.description,
        image: req.body.image,
        categoryId: req.params.catId
    })

    product = await product.save()
    res.send(product)
})




module.exports = router;