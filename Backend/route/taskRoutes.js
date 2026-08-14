import express from "express"
import { createTask, getTasks } from "../controllers/taskController.js"

const router=express.Router()

router.post("/create-task",createTask)
router.get("/getAll-Task",getTasks)


export default router