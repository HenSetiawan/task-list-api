const Task = require("../models/TaskModel");

exports.addTask = async (req, res) => {
  const { title, description, subject, deadline, url } = req.body;
  try {
    const task = new Task({
      title,
      description,
      deadline,
      subject,
      url,
    });
    const result = await task.save();
    res.json({ result });
  } catch (error) {
    res.json({ error: error });
  }
};

exports.getAllTask = async (req, res) => {
  try {
    const allTask = await Task.find({});
    res.json({
      message: "success get all task",
      data: allTask,
    });
  } catch (error) {
    res.json({ error: error });
  }
};
