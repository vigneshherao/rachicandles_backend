const jwt = require("jsonwebtoken");
const adminModel = require("../models/admin");

const adminAuth = async (req, res, next) => {
  try {
    const { token } = req.cookies;

    if (!token) {
      return res.status(401).send("Authentication token is missing");
    }

    const decodedObj = await jwt.verify(token, "RachiCandles@2024");

    const admin = await adminModel.findById({ _id: decodedObj._id });

    if (!admin) {
      throw new Error("admin is not authenicated");
    }

    req.admin = admin;

    next();
  } catch (error) {
    res.status(404).send("error while verifing admin :" + error.message);
  }
};

module.exports = adminAuth;
