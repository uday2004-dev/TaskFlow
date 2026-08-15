import express from "express";

import {
  createTask,
  getTasks,
  getTaskById,
  updateTask,
  deleteTask,
  moveTask,
} from "../controllers/taskController.js";

const router = express.Router();

router.post("/create-task", createTask);

router.get("/getAll-task", getTasks);

router.get("/get-task/:id", getTaskById);

router.put("/update-task/:id", updateTask);

router.delete("/delete-task/:id", deleteTask);

router.patch("/move-task/:id", moveTask);

export default router;