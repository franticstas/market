const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
  name: {
    type: String,
    trim: true,
  },
  description: {
    type: String,
    trim: true,
  },
  images: [
    {
      image: {
        originalname: { type: String },
        path: { type: String },
      },
    },
  ],
  price: {
    type: Number,
    default: 0,
  },
  countInStock: {
    type: Number,
    required: true,
    min: 0,
    max: 255,
  },
  category: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Category",
    required: true,
  },
  subCategory: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "SubCategory",
    required: false,
  },
});

const Product = mongoose.model("Product", productSchema);

module.exports = Product;
