const express = require("express");
const router = express.Router();
const Product = require("../models/product");
const productValidate = require("../utils/apiValidation");

router.get("/products", async (req, res) => {
  try {
    const data = await Product.find();
    if (!data) {
      throw new Error("Products are not available!");
    }

    res.json({
      message: "Products fetched sucessfully",
      data,
    });
  } catch (error) {
    res.status(400).send("Error in Product Routes" + error.message);
  }
});

router.post("/add/product", async (req, res) => {
  try {
    const { title, subtitle, price, image, description } = req.body;

    productValidate(req);

    const product = {
      title,
      subtitle,
      price,
      image,
      description,
    };

    const data = await Product(product).save();

    res.json({
      message: `${data.title} Product added sucessfully `,
      data,
    });
  } catch (error) {
    res.status(500).send("Error in adding proudct " + error.message);
  }
});

module.exports = router;
