import { useEffect, useState } from "react";
import axios from "axios";

const TaskDetails = () => {
  const [tasks, setTasks] = useState([]);
  const [selectedTaskId, setSelectedTaskId] = useState("");

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [status, setStatus] = useState("todo");
  const [priority, setPriority] = useState("medium");

  const [loading, setLoading] = useState(false);

  // Get all tasks
  const getAllTasks = async () => {
    try {
      const response = await axios.get(
        "http://localhost:3000/api/task/getAll-task"
      );

      setTasks(response.data.tasks);
    } catch (error) {
      console.error("Error fetching tasks:", error);
    }
  };

  useEffect(() => {
    getAllTasks();
  }, []);

  // Task select hone par uski details form mein show karo
  const handleTaskSelect = (e) => {
    const taskId = e.target.value;

    setSelectedTaskId(taskId);

    if (!taskId) {
      setTitle("");
      setDescription("");
      setStatus("todo");
      setPriority("medium");
      return;
    }

    const selectedTask = tasks.find(
      (task) => task._id === taskId
    );

    if (selectedTask) {
      setTitle(selectedTask.title || "");
      setDescription(selectedTask.description || "");
      setStatus(selectedTask.status || "todo");
      setPriority(selectedTask.priority || "medium");
    }
  };

  // Save Changes
  const handleSaveChanges = async () => {
    if (!selectedTaskId) {
      alert("Please select a task first");
      return;
    }

    try {
      setLoading(true);

      // Title, Description, Priority update
      await axios.put(
        `http://localhost:3000/api/task/update-task/${selectedTaskId}`,
        {
          title,
          description,
          priority,
        }
      );

      // Status update
      await axios.patch(
        `http://localhost:3000/api/task/move-task/${selectedTaskId}`,
        {
          status,
        }
      );

      alert("Task updated successfully");

      // Latest data fetch
      await getAllTasks();

    } catch (error) {
      console.error("Update Task Error:", error);
      alert("Failed to update task");
    } finally {
      setLoading(false);
    }
  };

  // Delete Task
  const handleDeleteTask = async () => {
    if (!selectedTaskId) {
      alert("Please select a task first");
      return;
    }

    const confirmDelete = window.confirm(
      "Are you sure you want to delete this task?"
    );

    if (!confirmDelete) return;

    try {
      setLoading(true);

      await axios.delete(
        `http://localhost:3000/api/task/delete-task/${selectedTaskId}`
      );

      alert("Task deleted successfully");

      // Form clear
      setSelectedTaskId("");
      setTitle("");
      setDescription("");
      setStatus("todo");
      setPriority("medium");

      // Latest tasks fetch
      await getAllTasks();

    } catch (error) {
      console.error("Delete Task Error:", error);
      alert("Failed to delete task");
    } finally {
      setLoading(false);
    }
  };

  return (
    <aside className="w-72 bg-white border-l border-slate-200 p-5 flex flex-col gap-5">

      {/* Header */}
      <div>
        <h2 className="text-xl font-bold text-slate-900">
          Task Details
        </h2>
      </div>

      {/* Select Task */}
      <div>
        <label className="block text-sm font-semibold text-slate-700 mb-2">
          Select Task
        </label>

        <select
          value={selectedTaskId}
          onChange={handleTaskSelect}
          className="w-full px-3 py-2.5 border border-slate-200 rounded-lg bg-white text-sm text-slate-700 outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100 cursor-pointer"
        >
          <option value="">Select a task</option>

          {tasks.map((task) => (
            <option key={task._id} value={task._id}>
              {task.title}
            </option>
          ))}
        </select>
      </div>

      {/* Task Title */}
      {selectedTaskId && (
        <>
          <div>
            <label className="block text-sm font-semibold text-slate-700 mb-2">
              Task Title
            </label>

            <input
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className="w-full px-3 py-2.5 border border-slate-200 rounded-lg text-sm text-slate-700 outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
            />
          </div>

          {/* Description */}
          <div>
            <label className="block text-sm font-semibold text-slate-700 mb-2">
              Description
            </label>

            <textarea
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              rows={4}
              className="w-full px-3 py-2.5 border border-slate-200 rounded-lg text-sm text-slate-700 outline-none resize-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
            />
          </div>

          {/* Status */}
          <div>
            <label className="block text-sm font-semibold text-slate-700 mb-2">
              Status
            </label>

            <select
              value={status}
              onChange={(e) => setStatus(e.target.value)}
              className="w-full px-3 py-2.5 border border-slate-200 rounded-lg bg-white text-sm text-slate-700 outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100 cursor-pointer"
            >
              <option value="todo">To Do</option>
              <option value="progress">In Progress</option>
              <option value="done">Done</option>
            </select>
          </div>

          {/* Priority */}
          <div>
            <label className="block text-sm font-semibold text-slate-700 mb-2">
              Priority
            </label>

            <select
              value={priority}
              onChange={(e) => setPriority(e.target.value)}
              className="w-full px-3 py-2.5 border border-slate-200 rounded-lg bg-white text-sm text-slate-700 outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100 cursor-pointer"
            >
              <option value="high">High</option>
              <option value="medium">Medium</option>
              <option value="low">Low</option>
            </select>
          </div>

          {/* Buttons */}
          <div className="mt-auto flex flex-col gap-3">

            <button
              onClick={handleSaveChanges}
              disabled={loading}
              className="w-full py-3 bg-blue-600 hover:bg-blue-700 disabled:opacity-50 text-white rounded-lg font-medium transition cursor-pointer"
            >
              {loading ? "Saving..." : "Save Changes"}
            </button>

            <button
              onClick={handleDeleteTask}
              disabled={loading}
              className="w-full py-3 border border-red-500 text-red-500 hover:bg-red-50 disabled:opacity-50 rounded-lg font-medium transition cursor-pointer"
            >
              Delete Task
            </button>

          </div>
        </>
      )}

    </aside>
  );
};

export default TaskDetails;