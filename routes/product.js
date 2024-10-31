const express = require("express");
const router = express.Router();
const Product = require("../models/product");
const { productValidate, validateEdit } = require("../utils/apiValidation");
const adminAuth = require("../middleware/adminAuth");

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

router.get("/products/:category", async (req, res) => {
  try {
    const { category } = req.params;
    const data = await Product.find({ category: category });
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

router.get("/product/:productId", async (req, res) => {
  try {
    const productId = req.params.productId;

    const data = await Product.findById(productId);

    if (!data) {
      throw new Error("Product is not exist!");
    }

    res.json({
      message: "Product fetched sucessfully",
      data,
    });
  } catch (error) {
    res.status(400).send("Error in Product Routes " + error.message);
  }
});

router.post("/add/product", adminAuth, async (req, res) => {
  if (!req.file) {
    return res.status(400).send("No files were uploaded");
  }

  try {
    const { title, subtitle, price, description, category } = req.body;
    await productValidate(req);

    const { path: filePath, filename } = req.file;

    const product = {
      title,
      subtitle,
      price,
      image: {
        url: filePath,
        filename: filename,
      },
      description,
      category,
    };

    const data = await Product(product).save();

    res.status(201).json({
      message: `${data.title} product added successfully`,
      data,
    });
  } catch (error) {
    res.status(500).send("Error in adding product: " + error.message);
  }
});

router.patch("/edit/product/:productId", adminAuth, async (req, res) => {
  try {
    const { productId } = req.params;

    validateEdit(req);
    const isExistProduct = await Product.findById(productId);

    if (!isExistProduct) {
      return res.status(404).json({ message: "Product not found" });
    }

    const updatedProduct = await Product.findByIdAndUpdate(
      productId,
      req.body,
      { new: true }
    );

    res.json({
      message: `${updatedProduct.title} is updated sucessfully`,
      updatedProduct,
    });
  } catch (error) {
    res.status(500).send("Error in editing " + error.message);
  }
});

router.delete("/delete/product/:productId", adminAuth, async (req, res) => {
  try {
    const { productId } = req.params;

    const isExistProduct = await Product.findById(productId);

    if (!isExistProduct) {
      return res.status(404).json({ message: "Product not found" });
    }

    await Product.findByIdAndDelete(productId);

    res.status(200).json({
      message: `${isExistProduct.title} has been deleted successfully`,
    });
  } catch (error) {
    res.status(500).send("Error in deleting product " + error.message);
  }
});

module.exports = router;
