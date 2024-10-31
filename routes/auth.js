const express = require("express");
const adminModel = require("../models/admin");
const router = express.Router();

router.post("/login", async (req, res) => {
  try {
    const { email, password } = req.body;

    const isValidAdmin = await adminModel.findOne({ email });

    if (!isValidAdmin) {
      throw new Error("admin is not valid");
    }

    const isValidPassword = await isValidAdmin.comparePassword(password);

    if (!isValidPassword) {
      throw new Error("password is not valid");
    }

    const token = await isValidAdmin.getJwt();

    res.cookie("token", token, {
      expires: new Date(Date.now() + 2 * 24 * 60 * 60 * 1000),
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: "strict",
    });

    res.status(200).json({ message: "Admin logged in successfully" });
  } catch (error) {
    res.status(500).json({ error: "Error occurred: " + error.message });
  }
});

module.exports = router;
