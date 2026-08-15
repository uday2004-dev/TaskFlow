import mongoose from "mongoose";

const taskSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: false
    },
    priority: {
        type: String,
        enum: ["low", "medium", "high"],
    },
       status: {
      type: String,
      enum: ["todo", "progress", "done"],
      default: "todo",
    },
},
    {
        timestamps: true,

    })

export const Tasks = mongoose.model("Task", taskSchema)


