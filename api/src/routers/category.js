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

module.exports = router