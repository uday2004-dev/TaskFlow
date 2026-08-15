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



export const getTaskById = async (req, res) => {
  try {
    const { id } = req.params;

    const task = await Tasks.findById(id);

    if (!task) {
      return res.status(404).json({
        success: false,
        message: "Task not found",
      });
    }

    return res.status(200).json({
      success: true,
      message: "Task fetched successfully",
      task,
    });
  } catch (error) {
    console.error("Get Task Error:", error);

    return res.status(500).json({
      success: false,
      message: "Internal server error",
    });
  }
};



export const deleteTask = async (req, res) => {
  try {
    const { id } = req.params;

    const task = await Tasks.findByIdAndDelete(id);

    if (!task) {
      return res.status(404).json({
        success: false,
        message: "Task not found",
      });
    }

    return res.status(200).json({
      success: true,
      message: "Task deleted successfully",
    });
  } catch (error) {
    console.error("Delete Task Error:", error);

    return res.status(500).json({
      success: false,
      message: "Internal server error",
    });
  }
};














export const updateTask = async (req, res) => {
  try {
    const { id } = req.params;
    const { title, description, priority } = req.body;

    // Title validation
    if (title !== undefined && !title.trim()) {
      return res.status(400).json({
        success: false,
        message: "Title cannot be empty",
      });
    }

    // Priority validation
    if (
      priority !== undefined &&
      priority !== null &&
      !["low", "medium", "high"].includes(priority)
    ) {
      return res.status(400).json({
        success: false,
        message: "Priority must be low, medium or high",
      });
    }

    const task = await Tasks.findByIdAndUpdate(
      id,
      {
        ...(title !== undefined && { title: title.trim() }),
        ...(description !== undefined && {
          description: description?.trim(),
        }),
        ...(priority !== undefined && { priority }),
      },
      // {
      //   new: true,
      //   runValidators: true,
      // }
          {
  returnDocument: "after",
  runValidators: true,
}
    );
    if (!task) {
      return res.status(404).json({
        success: false,
        message: "Task not found",
      });
    }

    return res.status(200).json({
      success: true,
      message: "Task updated successfully",
      task,
    });
  } catch (error) {
    console.error("Update Task Error:", error);

    return res.status(500).json({
      success: false,
      message: "Internal server error",
    });
  }
};





// export const moveTask = async (req, res) => {
//   try {
//     const { id } = req.params;
//     const { columnId } = req.body;

//     if (!columnId) {
//       return res.status(400).json({
//         success: false,
//         message: "Column ID is required",
//       });
//     }

//     const task = await Tasks.findByIdAndUpdate(
//       id,
//       {
//         column: columnId,
//       },
//       {
//         new: true,
//         runValidators: true,
//       }
//     );

//     if (!task) {
//       return res.status(404).json({
//         success: false,
//         message: "Task not found",
//       });
//     }

//     return res.status(200).json({
//       success: true,
//       message: "Task moved successfully",
//       task,
//     }); } catch (error) {
//     console.error("Move Task Error:", error);

//     return res.status(500).json({
//       success: false,
//       message: "Internal server error",
//     });
//   }
// };


export const moveTask = async (req, res) => {
  try {
    const { id } = req.params;
    const { status } = req.body;

    if (!status) {
      return res.status(400).json({
        success: false,
        message: "Status is required",
      });
    }

    if (!["todo", "progress", "done"].includes(status)) {
      return res.status(400).json({
        success: false,
        message: "Invalid status",
      });
    }

    const task = await Tasks.findByIdAndUpdate(
      id,
      {
        status,
      },
      // {
      //   new: true,
      //   runValidators: true,
      // }
      {
  returnDocument: "after",
  runValidators: true,
}
    );

    if (!task) {
      return res.status(404).json({
        success: false,
        message: "Task not found",
      });
    }

    return res.status(200).json({
      success: true,
      message: "Task moved successfully",
      task,
    });

  } catch (error) {
    console.error("Move Task Error:", error);

    return res.status(500).json({
      success: false,
      message: "Internal server error",
    });
  }
};