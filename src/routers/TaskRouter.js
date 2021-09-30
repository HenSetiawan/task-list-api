const express = require("express");
const taskRouter = express.Router();
const taskController = require("../controllers/TaskContoller");
const auth = require("../middleware/Auth");

taskRouter.post("/api/v1/task", auth.auth, taskController.addTask);
taskRouter.get("/api/v1/tasks", taskController.getAllTask);
taskRouter.delete("/api/v1/task/:idTask", auth.auth, taskController.deleteTask);
taskRouter.put("/api/v1/task/:idTask", auth.auth, taskController.updateTask);

module.exports = taskRouter;
