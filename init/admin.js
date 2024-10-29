const mongoose = require("mongoose");
const adminModel = require("../models/admin");
const connectDb = require("../config/database");

const addAdmin = async () => {
  try {
    await connectDb();
    const adminObj = {
      email: "admin@gmail.com",
      password: "admin@2024",
    };

    const data = await new adminModel(adminObj).save();

    console.log("admin is created" + data);
  } catch (error) {
    console.log("Error in creating admin" + error.message);
  }
};

addAdmin();
