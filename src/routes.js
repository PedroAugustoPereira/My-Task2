const express = require("./app");
const router = express.Router();
const TaskController = require("./controllers/TaskController");


router.get("/", TaskController.getAllTasks);