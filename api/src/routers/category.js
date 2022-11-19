const express = require("express");
const router = express.Router();
const Category = require("../models/category");
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

router.post("/categories", upload.array("category_image"), async (req, res) => {
  const category = new Category(req.body);

  let image = {};
  if (req.files && req.files[0]) {
    image.originalname = req.files[0].originalname;
    image.path = req.files[0].path;
    category.image = image;
  }

  try {
    await category.save();
    res.status(201).send(category);
  } catch (e) {
    console.log("ERROR");
    res.status(400).send(e);
  }
});

router.get("/categories/all", async (req, res) => {
  try {
    const categoriesList = await Category.find({});
    res.status(201).send(categoriesList);
  } catch (e) {
    res.status(400).send(e);
  }
});

module.exports = router;
