import { useState } from "react";
import axios from "axios";

const TaskForm = ({ onTaskCreated }) => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!title.trim()) {
      alert("Title is required");
      return;
    }

    try {
      setLoading(true);

      const response = await axios.post(
        "http://localhost:3000/api/task/create-task",
        {
          title,
          description,
        }
      );

      console.log(response.data);

      setTitle("");
      setDescription("");

      if (onTaskCreated) {
        onTaskCreated(response.data.task);
      }

    } catch (error) {
      console.error("Create task error:", error);

      alert(
        error.response?.data?.message ||
        "Failed to create task"
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="task-form">

      <h2>Create New Task</h2>

      <input
        type="text"
        placeholder="Task title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />

      <textarea
        placeholder="Description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />

      <button type="submit" disabled={loading}>
        {loading ? "Creating..." : "Create Task"}
      </button>

    </form>
  );
};

export default TaskForm;