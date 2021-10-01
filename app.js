const express = require("express");
const app = express();
const mongoose = require("mongoose");
require("dotenv").config();
const port = process.env.PORT || 3000;
const cors = require('cors');
const taskRoute = require("./src/routers/TaskRouter");
const userRoute = require("./src/routers/UserRouter");

const mongooDBUrl = process.env.MONGOO_DB_URL;
mongoose
  .connect(mongooDBUrl)
  .then((success) => {
    console.log("Success");
  })
  .catch((error) => {
    console.log("Error");
  });

app.use(express.json());
app.use(cors());

app.use("/", taskRoute);
app.use("/", userRoute);
app.use("/", (req, res) => {
  res.json({ message: "NOT FOUND" });
});

app.listen(port, () => console.log("server running on port " + port));
