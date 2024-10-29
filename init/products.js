const connectDb = require("../config/database");
const Product = require("../models/product");
const dummyProducts = require("../utils/products");

const addProducts = async () => {
  try {
    connectDb();
    await Product.deleteMany({});
    const data = await Product.insertMany(dummyProducts);
    console.log("Product is added to database " + data);
  } catch (error) {
    console.log("Error in adding products " + error.message);
  }
};

addProducts();
