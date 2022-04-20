const express = require('express')
const router = express.Router()
const Product = require('../models/product')
const auth = require('../middleware/auth')

router.post('/products', auth, async (req, res) => {
    const product = new Product(req.body)

    try {
        await product.save()
        res.status(201).send(product)
    } catch (e) {
        //console.log('ERROR');
        res.status(400).send(e)
    }
})


module.exports = router