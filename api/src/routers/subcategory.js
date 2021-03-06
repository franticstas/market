const express = require('express')
const router = express.Router()
const SubCategory = require('../models/subcategory')

router.post('/subcategory', async (req, res) => {
    const subcategory = new SubCategory(req.body)

    try {
        await subcategory.save()
        res.status(201).send(subcategory)
    } catch (e) {
        console.log('ERROR');
        res.status(400).send(e)
    }
})

router.get('/subcategory/all', async (req, res) => {
    try {
        const subcategoryList = await SubCategory.find({})
        res.status(201).send(subcategoryList)
    } catch(e) {
        res.status(400).send(e)
    }
})

module.exports = router