// import { useState } from "react";
// import axios from "axios";

// const TaskForm = ({ onTaskCreated }) => {
//   const [title, setTitle] = useState("");
//   const [description, setDescription] = useState("");
//   const [loading, setLoading] = useState(false);

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     if (!title.trim()) {
//       alert("Title is required");
//       return;
//     }

//     try {
//       setLoading(true);

//       const response = await axios.post(
//         "http://localhost:3000/api/task/create-task",
//         {
//           title,
//           description,
//         }
//       );

//       console.log(response.data);

//       setTitle("");
//       setDescription("");

//       if (onTaskCreated) {
//         onTaskCreated(response.data.task);
//       }

//     } catch (error) {
//       console.error("Create task error:", error);

//       alert(
//         error.response?.data?.message ||
//         "Failed to create task"
//       );
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <form onSubmit={handleSubmit} className="task-form">

//       <h2>Create New Task</h2>

//       <input
//         type="text"
//         placeholder="Task title"
//         value={title}
//         onChange={(e) => setTitle(e.target.value)}
//       />

//       <textarea
//         placeholder="Description"
//         value={description}
//         onChange={(e) => setDescription(e.target.value)}
//       />

//       <button type="submit" disabled={loading}>
//         {loading ? "Creating..." : "Create Task"}
//       </button>

//     </form>
//   );
// };

// export default TaskForm;


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
    <form
      onSubmit={handleSubmit}
      className="
        w-full
        max-w-lg
        mx-auto
        bg-white
        border
        border-slate-200
        rounded-xl
        p-4
        sm:p-6
        shadow-sm
      "
    >

      {/* Heading */}
      <div className="mb-5 sm:mb-6">
        <h2 className="text-xl sm:text-2xl font-bold text-slate-900">
          Create New Task
        </h2>

        <p className="mt-1 text-sm text-slate-500">
          Add a new task to your board.
        </p>
      </div>


      {/* Title */}
      <div className="mb-4 sm:mb-5">

        <label className="block mb-2 text-sm font-semibold text-slate-700">
          Task Title
        </label>

        <input
          type="text"
          placeholder="Enter task title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="
            w-full
            px-3
            sm:px-4
            py-2.5
            sm:py-3
            text-sm
            sm:text-base
            border
            border-slate-200
            rounded-lg
            outline-none
            text-slate-700
            placeholder:text-slate-400
            focus:border-blue-500
            focus:ring-2
            focus:ring-blue-100
            transition
          "
        />

      </div>


      {/* Description */}
      <div className="mb-5 sm:mb-6">

        <label className="block mb-2 text-sm font-semibold text-slate-700">
          Description
        </label>

        <textarea
          placeholder="Enter task description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          rows={5}
          className="
            w-full
            px-3
            sm:px-4
            py-2.5
            sm:py-3
            text-sm
            sm:text-base
            border
            border-slate-200
            rounded-lg
            outline-none
            resize-none
            text-slate-700
            placeholder:text-slate-400
            focus:border-blue-500
            focus:ring-2
            focus:ring-blue-100
            transition
          "
        />

      </div>


      {/* Submit */}
      <button
        type="submit"
        disabled={loading}
        className="
          w-full
          py-2.5
          sm:py-3
          bg-blue-600
          hover:bg-blue-700
          disabled:opacity-50
          disabled:cursor-not-allowed
          text-white
          text-sm
          sm:text-base
          font-medium
          rounded-lg
          transition
          cursor-pointer
        "
      >
        {loading ? "Creating..." : "Create Task"}
      </button>

    </form>
  );
};

export default TaskForm;