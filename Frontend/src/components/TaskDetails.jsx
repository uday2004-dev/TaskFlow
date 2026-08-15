const TaskDetails = () => {
  return (
    <aside className="w-72 bg-white border-l border-slate-200 p-5 flex flex-col gap-5">

      {/* Header */}
      <div>
        <h2 className="text-xl font-bold text-slate-900">
          Task Details
        </h2>
      </div>

      {/* Task Title */}
      <div>
        <h3 className="text-lg font-semibold text-slate-900">
          Design database schema
        </h3>
      </div>

      {/* Priority Badge */}
      <div>
        <span className="inline-block px-3 py-1 rounded-full text-xs font-medium bg-red-100 text-red-600">
          High
        </span>
      </div>

      {/* Description */}
      <div>
        <h4 className="text-sm font-semibold text-slate-700 mb-2">
          Description
        </h4>

        <p className="text-sm leading-6 text-slate-500">
          Create tables for boards, columns and tasks.
        </p>
      </div>

      {/* Status */}
      <div>
        <label className="block text-sm font-semibold text-slate-700 mb-2">
          Status
        </label>

        <select
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
          className="w-full py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-medium transition cursor-pointer"
        >
          Save Changes
        </button>

        <button
          className="w-full py-3 border border-red-500 text-red-500 hover:bg-red-50 rounded-lg font-medium transition cursor-pointer"
        >
          Delete Task
        </button>

      </div>

    </aside>
  );
};

export default TaskDetails;