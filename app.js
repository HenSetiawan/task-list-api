const express = require("express");
const app = express();
const mongoose = require("mongoose");
require("dotenv").config();

const noteRoute = require("./src/routers/NoteRouter");

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

app.use("/", noteRoute);
app.use("/", (req, res) => {
  res.json({ message: "NOT FOUND" });
});

app.listen(3000, () => console.log("server running on port 3000"));
