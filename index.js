const express = require("express");
const app = express();
const port = 5000;
const connectDb = require("./config/database");
const adminModel = require("./models/admin");
const adminAuth = require("./middleware/adminAuth");
const cookieParser = require("cookie-parser");

//middleware
app.use(express.json());
app.use(cookieParser());

app.post("/login", async (req, res) => {
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
    });

    res.status(200).json({ message: "Admin logged in successfully" });
  } catch (error) {
    res.status(500).json({ error: "Error occurred: " + error.message });
  }
});

//Database connection
connectDb()
  .then(() => {
    console.log("Connected to databse");

    app.listen(port, () => {
      console.log(`server started running sucessfully at ${port}`);
    });
  })
  .catch((err) => {
    console.log("Error in connection" + err);
  });
