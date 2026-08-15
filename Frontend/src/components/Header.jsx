
import { useState } from "react";
import { FiSearch, FiPlus, FiX } from "react-icons/fi";
import axios from "axios";

const Header = () => {
  const [showForm, setShowForm] = useState(false);

  const [formData, setFormData] = useState({
    title: "",
    description: "",
    priority: "medium",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(
        "http://localhost:3000/api/task/create-task",
        formData
      );

      console.log(response.data);

      setFormData({
        title: "",
        description: "",
        priority: "medium",
      });

      setShowForm(false);

      // baad mein yahan board refresh karenge
    } catch (error) {
      console.error("Create Task Error:", error);
    }
  };

  return (
    <>
      {/* HEADER */}
      <header className="flex items-center justify-between bg-white border-b border-slate-200 px-8 py-7">

        {/* LEFT */}
        <div>
          <h1 className="text-3xl font-bold text-slate-900">
            TaskFlow Board
          </h1>

          <p className="mt-1 text-slate-500">
            A simple task board for your team
          </p>
        </div>

        {/* RIGHT */}
        <div className="flex items-center gap-4">

          {/* SEARCH */}
          <div className="flex items-center gap-3 w-60 h-12 px-4 border border-slate-200 rounded-lg bg-white">

            <FiSearch
              size={21}
              className="text-slate-500"
            />

            <input
              type="text"
              placeholder="Search tasks..."
              className="w-full outline-none text-sm text-slate-700 placeholder:text-slate-400"
            />

          </div>

          {/* PRIORITY FILTER */}
          <select
            className="w-48 h-12 px-4 border border-slate-200 rounded-lg bg-white text-slate-600 outline-none cursor-pointer"
          >
            <option value="">All Priorities</option>
            <option value="high">High</option>
            <option value="medium">Medium</option>
            <option value="low">Low</option>
          </select>

          {/* NEW TASK */}
          <button
            onClick={() => setShowForm(true)}
            className="flex items-center gap-2 h-12 px-5 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg transition cursor-pointer"
          >
            <FiPlus size={21} />
            New Task
          </button>

        </div>
      </header>


      {/* CREATE TASK MODAL */}
      {showForm && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40">

          <div className="w-full max-w-lg bg-white rounded-xl shadow-2xl p-6">

            {/* MODAL HEADER */}
            <div className="flex items-center justify-between mb-6">

              <h2 className="text-2xl font-bold text-slate-900">
                Create New Task
              </h2>

              <button
                onClick={() => setShowForm(false)}
                className="p-2 text-slate-500 hover:text-slate-900 hover:bg-slate-100 rounded-lg transition cursor-pointer"
              >
                <FiX size={22} />
              </button>

            </div>


            {/* FORM */}
            <form onSubmit={handleSubmit}>

              {/* TITLE */}
              <div className="mb-5">

                <label className="block mb-2 text-sm font-semibold text-slate-700">
                  Title
                </label>

                <input
                  type="text"
                  name="title"
                  value={formData.title}
                  onChange={handleChange}
                  placeholder="Enter task title"
                  required
                  className="w-full px-4 py-3 border border-slate-200 rounded-lg outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
                />

              </div>


              {/* DESCRIPTION */}
              <div className="mb-5">

                <label className="block mb-2 text-sm font-semibold text-slate-700">
                  Description
                </label>

                <textarea
                  name="description"
                  value={formData.description}
                  onChange={handleChange}
                  placeholder="Enter task description"
                  rows={4}
                  className="w-full px-4 py-3 border border-slate-200 rounded-lg outline-none resize-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
                />

              </div>


              {/* PRIORITY */}
              <div className="mb-6">

                <label className="block mb-2 text-sm font-semibold text-slate-700">
                  Priority
                </label>

                <select
                  name="priority"
                  value={formData.priority}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-slate-200 rounded-lg bg-white outline-none cursor-pointer focus:border-blue-500"
                >
                  <option value="low">Low</option>
                  <option value="medium">Medium</option>
                  <option value="high">High</option>
                </select>

              </div>


              {/* ACTIONS */}
              <div className="flex justify-end gap-3">

                <button
                  type="button"
                  onClick={() => setShowForm(false)}
                  className="px-5 py-3 border border-slate-200 rounded-lg text-slate-600 hover:bg-slate-50 transition cursor-pointer"
                >
                  Cancel
                </button>

                <button
                  type="submit"
                  className="px-5 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-medium transition cursor-pointer"
                >
                  Create Task
                </button>

              </div>

            </form>

          </div>

        </div>
      )}
    </>
  );
};

export default Header;