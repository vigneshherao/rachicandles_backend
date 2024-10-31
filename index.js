const express = require("express");
const app = express();
const port = 5000;
const connectDb = require("./config/database");
const cookieParser = require("cookie-parser");
const admin = require("./routes/auth");
const product = require("./routes/product");
const cors = require("cors");
const { storage } = require("./utils/cloudConfig");
const multer = require("multer");
const path = require("path");
const Product = require("./models/product"); // Adjust as necessary
const { productValidate } = require("./utils/apiValidation");
const adminAuth = require("./middleware/adminAuth");

// Middleware
app.use(
  cors({
    origin: "https://rachifrontend.netlify.app",
    credentials: true,
  })
);

const upload = multer({ storage });

app.use(express.json());
app.use(cookieParser());
app.use(express.urlencoded({ extended: true }));

// Routes
app.use("/admin", admin);
app.use("/", upload.single("file"), product);

// Database connection
connectDb()
  .then(() => {
    console.log("Connected to database");
    app.listen(port, () => {
      console.log(`Server started running successfully at ${port}`);
    });
  })
  .catch((err) => {
    console.log("Error in connection: " + err);
  });
