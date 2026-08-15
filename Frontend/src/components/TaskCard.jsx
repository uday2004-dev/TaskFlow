import { FiMoreVertical } from "react-icons/fi";

const TaskCard = ({ task }) => {
  return (
    <div className="bg-white rounded-xl p-4 shadow-sm border border-slate-100">

      {/* Top */}
      <div className="flex items-start justify-between gap-3">

        <h3 className="font-semibold text-slate-900">
          {task.title}
        </h3>

        <button className="text-slate-500 hover:text-slate-900 cursor-pointer">
          <FiMoreVertical size={18} />
        </button>

      </div>


      {/* Description */}
      {task.description && (
        <p className="mt-3 text-sm leading-6 text-slate-500">
          {task.description}
        </p>
      )}


      {/* Bottom */}
      <div className="mt-4 flex items-center justify-between">

        {/* Priority */}
        <span
          className={`
            px-3 py-1 rounded-full text-xs font-medium
            ${
              task.priority === "high"
                ? "bg-red-100 text-red-600"
                : task.priority === "medium"
                ? "bg-orange-100 text-orange-600"
                : "bg-green-100 text-green-600"
            }
          `}
        >
          {task.priority
            ? task.priority.charAt(0).toUpperCase() +
              task.priority.slice(1)
            : "Low"}
        </span>

      </div>

    </div>
  );
};

export default TaskCard;