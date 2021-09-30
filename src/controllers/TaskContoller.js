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

exports.deleteTask = async (req, res) => {
  const idTask = req.params.idTask;
  console.log(idTask);
  try {
    const result = await Task.findByIdAndDelete(idTask);
    if (result) {
      res.json({ message: "success delete task", data: result });
    } else {
    }
  } catch (error) {
    console.error(error);
    res.json({
      message: `task with id ${idTask} not found`,
      error: error.message,
    });
  }
};

exports.updateTask = async (req, res) => {
  const idTask = req.params.idTask;
  const { title, description, subject, deadline, url } = req.body;
  try {
    const result = await Task.findByIdAndUpdate(idTask, {
      title,
      description,
      deadline,
      subject,
      url,
    });

    if (result == null) {
      console.error(error);
      res.json({
        message: `task with id ${idTask} not found`,
        error: error.message,
      });
    }

    const newData = await Task.findById(idTask);

    res.json({
      message: "success update task",
      old_data: result,
      new_data: newData,
    });
  } catch (error) {
    console.error(error);
    res.json({
      message: `task with id ${idTask} not found`,
      error: error.message,
    });
  }
};
