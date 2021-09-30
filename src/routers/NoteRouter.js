const express = require("express");
const noteRouter = express.Router();
const noteController = require("../controllers/TaskContoller");

noteRouter.post("/api/v1/task", noteController.addTask);
noteRouter.get("/api/v1/tasks", noteController.getAllTask);
noteRouter.delete("/api/v1/task/:idTask", noteController.deleteTask);
noteRouter.put("/api/v1/task/:idTask", noteController.updateTask);

module.exports = noteRouter;
