const express = require("express");
const app = express();
const port = 5000;
const connectDb = require("./config/database");
const adminModel = require("./models/admin");

//middleware
app.use(express.json());

app.post("/login", async (req, res) => {
  try {
    const { email, password } = req.body;

    const isValidAdmin = await adminModel.findOne({ email });

    console.log(isValidAdmin);

    if (!isValidAdmin) {
      throw new Error("admin is not valid");
    }

    if (isValidAdmin.password != password) {
      throw new Error("password is not valid");
    }
  } catch (error) {
    res.status(404).send("Error occured " + error.message);
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
