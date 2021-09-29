const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const taskSchema = new Schema(
  {
    title: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    subject: {
      type: String,
      required: true,
    },
    deadline: {
      type: Date,
      required: true,
    },
    url: {
      type: String,
      required: false,
    },
  },
  { timestamps: true }
);

const Task = mongoose.model("task", taskSchema);
module.exports = Task;
