



import { useEffect, useState } from "react";
import axios from "axios";

const TaskDetails = ({ search }) => {
  const [tasks, setTasks] = useState([]);
  const [selectedTask, setSelectedTask] = useState(null);

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [status, setStatus] = useState("todo");
  const [priority, setPriority] = useState("medium");

  const [loading, setLoading] = useState(false);

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

  // Search ke basis par task find karo
  useEffect(() => {
    const searchText = search?.toLowerCase().trim();

    if (!searchText) {
      setSelectedTask(null);
      return;
    }

    const task = tasks.find(
      (task) =>
        task.title?.toLowerCase().includes(searchText) ||
        task.description?.toLowerCase().includes(searchText)
    );

    setSelectedTask(task || null);
  }, [search, tasks]);

  // Selected task ki details form mein daalo
  useEffect(() => {
    if (!selectedTask) {
      setTitle("");
      setDescription("");
      setStatus("todo");
      setPriority("medium");
      return;
    }

    setTitle(selectedTask.title || "");
    setDescription(selectedTask.description || "");
    setStatus(selectedTask.status || "todo");
    setPriority(selectedTask.priority || "medium");
  }, [selectedTask]);

  // const handleSaveChanges = async () => {
  //   if (!selectedTask) {
  //     alert("Search and select a task first");
  //     return;
  //   }

  //   try {
  //     setLoading(true);

  //     await axios.put(
  //       `http://localhost:3000/api/task/update-task/${selectedTask._id}`,
  //       {
  //         title,
  //         description,
  //         priority,
  //       }
  //     );

  //     await axios.patch(
  //       `http://localhost:3000/api/task/move-task/${selectedTask._id}`,
  //       {
  //         status,
  //       }
  //     );

  //     alert("Task updated successfully");

  //     await getAllTasks();

  //   } catch (error) {
  //     console.error("Update Task Error:", error);

  //     alert(
  //       error.response?.data?.message ||
  //       "Failed to update task"
  //     );
  //   } finally {
  //     setLoading(false);
  //   }
  // };

  const handleSaveChanges = async () => {
  if (!selectedTask) {
    alert("Search and select a task first");
    return;
  }

  try {
    setLoading(true);

    // Update title, description, priority
    await axios.put(
      `${import.meta.env.VITE_API_URL}/api/task/update-task/${selectedTask._id}`,
      {
        title,
        description,
        priority,
      }
    );

    // Update status
    await axios.patch(
      `${import.meta.env.VITE_API_URL}/api/task/move-task/${selectedTask._id}`,
      {
        status,
      }
    );

    alert("Task updated successfully");

    await getAllTasks();

  } catch (error) {
    console.error("Update Task Error:", error);

    alert(
      error.response?.data?.message ||
      "Failed to update task"
    );
  } finally {
    setLoading(false);
  }
};



const handleDeleteTask = async () => {
  if (!selectedTask) return;

  const confirmDelete = window.confirm(
    "Are you sure you want to delete this task?"
  );

  if (!confirmDelete) return;

  try {
    setLoading(true);

    await axios.delete(
      `${import.meta.env.VITE_API_URL}/api/task/delete-task/${selectedTask._id}`
    );

    alert("Task deleted successfully");

    setSelectedTask(null);

    await getAllTasks();

  } catch (error) {
    console.error("Delete Task Error:", error);

    alert(
      error.response?.data?.message ||
      "Failed to delete task"
    );
  } finally {
    setLoading(false);
  }
};

  return (
    <aside className="
      w-full
      xl:w-72
      shrink-0
      bg-white
      border
      border-slate-200
      rounded-xl
      p-4
      sm:p-5
      flex
      flex-col
      gap-4
    ">

      <div>
        <h2 className="
          text-lg
          sm:text-xl
          font-bold
          text-slate-900
        ">
          Task Details
        </h2>

        {search && (
          <p className="
            mt-1
            text-xs
            sm:text-sm
            text-slate-400
            break-words
          ">
            Search: "{search}"
          </p>
        )}
      </div>

      {!search ? (
        <div className="
          flex
          items-center
          justify-center
          min-h-32
          text-sm
          text-slate-400
          text-center
        ">
          Search a task to view its details
        </div>
      ) : !selectedTask ? (
        <div className="
          flex
          items-center
          justify-center
          min-h-32
          text-sm
          text-slate-400
          text-center
        ">
          No task found
        </div>
      ) : (
        <>
          {/* Title */}
          <div>
            <label className="block mb-2 text-sm font-semibold text-slate-700">
              Task Title
            </label>

            <input
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className="
                w-full
                px-3
                py-2.5
                border
                border-slate-200
                rounded-lg
                text-sm
                outline-none
                focus:border-blue-500
                focus:ring-2
                focus:ring-blue-100
              "
            />
          </div>

          {/* Description */}
          <div>
            <label className="block mb-2 text-sm font-semibold text-slate-700">
              Description
            </label>

            <textarea
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              rows={4}
              className="
                w-full
                px-3
                py-2.5
                border
                border-slate-200
                rounded-lg
                text-sm
                outline-none
                resize-none
                focus:border-blue-500
                focus:ring-2
                focus:ring-blue-100
              "
            />
          </div>

          {/* Status */}
          <div>
            <label className="block mb-2 text-sm font-semibold text-slate-700">
              Status
            </label>

            <select
              value={status}
              onChange={(e) => setStatus(e.target.value)}
              className="
                w-full
                px-3
                py-2.5
                border
                border-slate-200
                rounded-lg
                bg-white
                text-sm
                outline-none
              "
            >
              <option value="todo">To Do</option>
              <option value="progress">In Progress</option>
              <option value="done">Done</option>
            </select>
          </div>

          {/* Priority */}
          <div>
            <label className="block mb-2 text-sm font-semibold text-slate-700">
              Priority
            </label>

            <select
              value={priority}
              onChange={(e) => setPriority(e.target.value)}
              className="
                w-full
                px-3
                py-2.5
                border
                border-slate-200
                rounded-lg
                bg-white
                text-sm
                outline-none
              "
            >
              <option value="high">High</option>
              <option value="medium">Medium</option>
              <option value="low">Low</option>
            </select>
          </div>

          {/* Buttons */}
          <div className="flex flex-col gap-3 mt-2">

            <button
              onClick={handleSaveChanges}
              disabled={loading}
              className="
                w-full
                py-2.5
                sm:py-3
                bg-blue-600
                hover:bg-blue-700
                disabled:opacity-50
                text-white
                rounded-lg
                font-medium
                cursor-pointer
              "
            >
              {loading ? "Saving..." : "Save Changes"}
            </button>

            <button
              onClick={handleDeleteTask}
              disabled={loading}
              className="
                w-full
                py-2.5
                sm:py-3
                border
                border-red-500
                text-red-500
                hover:bg-red-50
                disabled:opacity-50
                rounded-lg
                font-medium
                cursor-pointer
              "
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