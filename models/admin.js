const mongoose = require("mongoose");
const { type } = require("os");
const validator = require("validator");
const { default: isEmail } = require("validator/lib/isEmail");

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

const Admin = mongoose.model("Admin", adminSchema);

module.exports = Admin;
