const mongoose = require("mongoose");
const { type } = require("os");
const validator = require("validator");
const { default: isEmail } = require("validator/lib/isEmail");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
require("dotenv").config();

const adminSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true,
    unique: true,
    validate(value) {
      if (!isEmail(value)) {
        throw new Error("Please give valid email");
      }
    },
  },
  password: {
    type: String,
    required: true,
  },
});

adminSchema.methods.getJwt = async function () {
  const user = this;
  const token = await jwt.sign({ _id: user._id }, process.env.secret, {
    expiresIn: "2d",
  });

  return token;
};

adminSchema.methods.comparePassword = async function (password) {
  try {
    const user = this;
    const isValid = await bcrypt.compare(password, user.password);
    return isValid;
  } catch (error) {
    console.log(error);
  }
};

const Admin = mongoose.model("Admin", adminSchema);

module.exports = Admin;
