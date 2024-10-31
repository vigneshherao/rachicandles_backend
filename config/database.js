const mongoose = require("mongoose");
require("dotenv").config();

const dbrul = process.env.mongo;

const connectDb = async () => {
  await mongoose.connect(dbrul);
};

module.exports = connectDb;
