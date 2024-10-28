const express = require("express");
const app = express();
const port = 5000;
const connectDb = require("./config/database");

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
