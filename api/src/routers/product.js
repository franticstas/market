const express = require('express')
const router = express.Router()
const Product = require('../models/product')
const auth = require('../middleware/auth')
const multer  = require('multer')
const upload = multer({ dest: 'uploads/' })


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

router.post('/testimage', upload.array('product_images'), async (req, res) => {
    console.log('BODY ',req.body);
    console.log('----------------------************-------------------');
    console.log('FILES', req.files);

    // console.log(req.files.length);

    const product = new Product(req.body)

    const imagesList = []

    for(let i = 0; i < req.files.length; i++) {
        console.log('FILES ', req.files[i]);
        const image = {
            originalname: req.files[i].originalname,
            path: req.files[i].path
        }

        imagesList.push(image)
    }

    product['images'] = imagesList;

    console.log('PRODUCT', product)

    try {
        await product.save()
        res.status(201).send(product)
    } catch (e) {
        console.log('ERROR');
        res.status(400).send(e)
    }
})


module.exports = router