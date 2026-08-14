import { Tasks } from "../model/taskModel.js";

export const createTask = async (req, res) => {
  try {
    const { title, description, priority } = req.body;

    // 1. Title required
    if (!title || !title.trim()) {
      return res.status(400).json({
        success: false,
        message: "Title is required",
      });
    }

    // 2. Priority validation
    if (
      priority &&
      !["low", "medium", "high"].includes(priority)
    ) {
      return res.status(400).json({
        success: false,
        message: "Priority must be low, medium or high",
      });
    }

    // 3. Create task
    const task = await Tasks.create({
      title: title.trim(),
      description: description?.trim(),
      priority,
    });

    // 4. Success response
    return res.status(201).json({
      success: true,
      message: "Task created successfully",
      task,
    });

  } catch (error) {
    console.error("Create Task Error:", error);

    return res.status(500).json({
      success: false,
      message: "Internal server error",
    });
  }
};





export const getTasks = async (req, res) => {
  try {
    const tasks = await Tasks.find();

    return res.status(200).json({
      success: true,
      message: "Tasks fetched successfully",
      tasks,
    });
  } catch (error) {
    console.error("Get Tasks Error:", error);

    return res.status(500).json({
      success: false,
      message: "Internal server error",
    });
  }
};