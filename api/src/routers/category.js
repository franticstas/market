const express = require('express')
const router = express.Router()
const Category = require('../models/category')

router.post('/category', async (req, res) => {
    const category = new Category(req.body)

    try {
        await category.save()
        res.status(201).send(category)
    } catch (e) {
        console.log('ERROR');
        res.status(400).send(e)
    }
})

router.get('/category/all', async (req, res) => {
    try {
        const categoriesList = await Category.find({})
        res.status(201).send(categoriesList)
    } catch(e) {
        res.status(400).send(e)
    }
})

module.exports = router