const mongoose = require('mongoose')

const productSchema = new mongoose.Schema({
    name: {
        type: String,
        trim: true
    },
    description: {
        type: String,
        trim: true,
    },
    category: {
        type: String,
        trim: true,
    },
    images:[
        {
            image: {
                originalname: { type: String },
                path: { type: String }
            }
        }
    ]
})

const Product = mongoose.model('Product', productSchema)

module.exports = Product