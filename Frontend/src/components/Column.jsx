

import { useState } from "react";
import axios from "axios";
import { FiPlus, FiX } from "react-icons/fi";
import TaskCard from "./TaskCard";

const Column = ({
  title,
  tasks,
  currentStatus,
  availableTasks,
  onTaskMoved,
}) => {
  const [showOptions, setShowOptions] = useState(false);
  const [loading, setLoading] = useState(false);

  const getMoveStatus = () => {
    if (currentStatus === "progress") {
      return {
        label: "Move to In Progress",
        value: "progress",
      };
    }

    if (currentStatus === "done") {
      return {
        label: "Move to Done",
        value: "done",
      };
    }

    return null;
  };

  const moveStatus = getMoveStatus();

  // const moveTask = async (task) => {
  //   try {
  //     setLoading(true);

  //     await axios.patch(
  //       `http://localhost:3000/api/task/move-task/${task._id}`,
  //       {
  //         status: moveStatus.value,
  //       }
  //     );

  //     setShowOptions(false);

  //     if (onTaskMoved) {
  //       await onTaskMoved();
  //     }

  //   } catch (error) {
  //     console.error("Move Task Error:", error);
  //   } finally {
  //     setLoading(false);
  //   }
  // };


  const moveTask = async (task) => {
  try {
    setLoading(true);

    await axios.patch(
      `${import.meta.env.VITE_API_URL}/api/task/move-task/${task._id}`,
      {
        status: moveStatus.value,
      }
    );

    setShowOptions(false);

    if (onTaskMoved) {
      await onTaskMoved();
    }

  } catch (error) {
    console.error("Move Task Error:", error);
  } finally {
    setLoading(false);
  }
};

  return (
    <div
      className="
        relative
        w-full
        bg-slate-100/70
        rounded-xl
        p-3
        sm:p-4
        min-h-[350px]
        sm:min-h-[450px]
        xl:min-h-[600px]
      "
    >

      {/* Header */}
      <div className="
        flex
        items-center
        justify-between
        gap-3
        mb-4
        sm:mb-5
      ">

        <div className="flex items-center gap-2 min-w-0">

          <h2 className="
            text-lg
            sm:text-xl
            font-semibold
            text-slate-900
            truncate
          ">
            {title}
          </h2>

          <span className="
            flex
            items-center
            justify-center
            min-w-7
            h-7
            px-2
            rounded-full
            bg-slate-200
            text-xs
            sm:text-sm
            text-slate-600
            shrink-0
          ">
            {tasks.length}
          </span>

        </div>

        {moveStatus && (
          <button
            onClick={() => setShowOptions((prev) => !prev)}
            className="
              p-1.5
              sm:p-2
              text-slate-700
              hover:bg-slate-200
              rounded-lg
              cursor-pointer
              shrink-0
            "
          >
            {showOptions ? (
              <FiX size={20} />
            ) : (
              <FiPlus size={20} />
            )}
          </button>
        )}

      </div>

      {/* Dropdown */}
      {showOptions && moveStatus && (
        <div
          className="
            absolute
            right-3
            sm:right-4
            top-14
            z-20
            w-[calc(100%-24px)]
            sm:w-64
            max-h-64
            overflow-y-auto
            bg-white
            border
            border-slate-200
            rounded-lg
            shadow-lg
            p-2
          "
        >

          <p className="
            px-3
            py-2
            text-xs
            font-semibold
            text-slate-400
            uppercase
          ">
            Available Tasks
          </p>

          {availableTasks.length === 0 ? (
            <p className="px-3 py-2 text-sm text-slate-400">
              No tasks available
            </p>
          ) : (
            availableTasks.map((task) => (
              <button
                key={task._id}
                disabled={loading}
                onClick={() => moveTask(task)}
                className="
                  w-full
                  text-left
                  px-3
                  py-2.5
                  rounded-md
                  text-sm
                  text-slate-700
                  hover:bg-slate-100
                  disabled:opacity-50
                  truncate
                "
              >
                {loading ? "Moving..." : task.title}
              </button>
            ))
          )}

        </div>
      )}

      {/* Tasks */}
      <div className="flex flex-col gap-3">

        {tasks.map((task) => (
          <TaskCard
            key={task._id}
            task={task}
            loading={loading}
          />
        ))}

      </div>

      {/* Move Button */}
      {moveStatus && (
        <button
          onClick={() => setShowOptions((prev) => !prev)}
          className="
            flex
            items-center
            justify-center
            gap-2
            w-full
            mt-4
            sm:mt-5
            py-2.5
            sm:py-3
            text-blue-600
            hover:bg-blue-50
            rounded-lg
            transition
            cursor-pointer
            text-sm
            sm:text-base
          "
        >
          <FiPlus size={18} />
          <span>{moveStatus.label}</span>
        </button>
      )}

    </div>
  );
};

export default Column;