const mongoose = require("mongoose");
const { type } = require("os");

const productSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
    subtitle: {
      type: String,
      required: true,
    },
    image: {
      url: String,
      filename: String,
    },
    price: {
      type: Number,
      min: 0,
      max: 10000,
      required: true,
    },
    description: {
      type: String,
    },
    category: {
      type: String,
      enum: {
        values: ["sweets", "candles"],
        message: "Category `{VALUE}` is not supported.",
      },
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

const Product = mongoose.model("Product", productSchema);

module.exports = Product;
