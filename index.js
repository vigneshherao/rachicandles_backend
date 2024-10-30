const express = require("express");
const app = express();
const port = 5000;
const connectDb = require("./config/database");
const cookieParser = require("cookie-parser");
const admin = require("./routes/auth");
const product = require("./routes/product");
const cors = require("cors");

//middleware
app.use(
  cors({
    origin: "http://localhost:3000",
    credentials: true,
  })
);
app.use(express.json());
app.use(cookieParser());

//routes
app.use("/admin", admin);
app.use("/", product);

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
