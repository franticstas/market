const express = require("express");
const router = express.Router();
const Product = require("../models/product");
const auth = require("../middleware/auth");
const multer = require("multer");

var storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "./uploads");
  },
  filename: function (req, file, cb) {
    cb(null, file.originalname);
  },
});

var upload = multer({ storage: storage });

router.post("/products", upload.array("product_images"), async (req, res) => {
  const product = new Product(req.body);

  for (let i = 0; i < req.files.length; i++) {
    let image = {};
    image.originalname = req.files[i].originalname;
    image.path = req.files[i].path;
    product.images = product.images.concat({ image });
  }

  try {
    await product.save();
    res.status(201).send(product);
  } catch (e) {
    console.log("ERROR");
    res.status(400).send(e);
  }
});

router.get("/products/all", async (req, res) => {
  try {
    const productsList = await Product.find({});
    console.log(productsList);
    res.status(201).send(productsList);
  } catch (e) {
    res.status(400).send(e);
  }
});

router.get("/products/:id", async (req, res) => {
  try {
    const idProduct = req.params.id;
    const product = await Product.findById(idProduct);
    res.status(201).send(product);
  } catch (e) {
    res.status(400).send(e);
  }
});

module.exports = router;
