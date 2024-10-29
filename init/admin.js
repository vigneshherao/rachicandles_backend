const adminModel = require("../models/admin");
const connectDb = require("../config/database");
const bcrypt = require("bcrypt");

const addAdmin = async () => {
  try {
    await connectDb();
    await adminModel.deleteMany({});
    const adminObj = {
      email: "admin@gmail.com",
      password: "admin@2024",
    };
    const hasedPassword = await bcrypt.hash(adminObj.password, 10);
    adminObj.password = hasedPassword;
    const data = await new adminModel(adminObj).save();
    console.log("Admin created sucessfully " + data.email);
  } catch (error) {
    console.log("Error in creating admin" + error.message);
  }
};

addAdmin();
