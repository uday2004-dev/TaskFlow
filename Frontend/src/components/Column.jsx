// import { useState } from "react";
// import axios from "axios";
// import { FiPlus, FiX } from "react-icons/fi";
// import TaskCard from "./TaskCard";

// const Column = ({ title, tasks, currentStatus, onTaskMoved }) => {
//   const [showOptions, setShowOptions] = useState(false);
//   const [loading, setLoading] = useState(false);

//   // Current column ke according available status
//   const getAvailableStatuses = () => {
//     if (currentStatus === "todo") {
//       return [
//         { label: "In Progress", value: "progress" },
//         { label: "Done", value: "done" },
//       ];
//     }

//     if (currentStatus === "progress") {
//       return [
//         { label: "Done", value: "done" },
//       ];
//     }

//     return [];
//   };

//   const availableStatuses = getAvailableStatuses();

//   // Kisi task ko move karna
//   const moveTask = async (task, newStatus) => {
//     try {
//       setLoading(true);

//       await axios.patch(
//         `http://localhost:3000/api/task/move-task/${task._id}`,
//         {
//           status: newStatus,
//         }
//       );

//       setShowOptions(false);

//       // Parent Board se tasks refresh
//       if (onTaskMoved) {
//         onTaskMoved();
//       }

//     } catch (error) {
//       console.error("Move Task Error:", error);
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <div className="relative bg-slate-100/70 rounded-xl p-4 min-h-[600px]">

//       {/* Column Header */}
//       <div className="flex items-center justify-between mb-5">

//         <div className="flex items-center gap-2">

//           <h2 className="text-xl font-semibold text-slate-900">
//             {title}
//           </h2>

//           <span className="flex items-center justify-center min-w-7 h-7 px-2 rounded-full bg-slate-200 text-sm text-slate-600">
//             {tasks.length}
//           </span>

//         </div>

//         {/* Plus button */}
//         {availableStatuses.length > 0 && (
//           <button
//             onClick={() => setShowOptions((prev) => !prev)}
//             className="p-1 text-slate-700 hover:bg-slate-200 rounded-lg cursor-pointer"
//           >
//             {showOptions ? (
//               <FiX size={22} />
//             ) : (
//               <FiPlus size={22} />
//             )}
//           </button>
//         )}

//       </div>

//       {/* Move Options */}
//       {showOptions && (
//         <div className="absolute right-4 top-14 z-20 w-48 bg-white border border-slate-200 rounded-lg shadow-lg p-2">

//           <p className="px-3 py-2 text-xs font-semibold text-slate-400 uppercase">
//             Move Task To
//           </p>

//           {availableStatuses.map((status) => (
//             <button
//               key={status.value}
//               onClick={() => {
//                 // Yahan task select karna padega
//               }}
//               className="w-full text-left px-3 py-2 rounded-md text-sm text-slate-700 hover:bg-slate-100"
//             >
//               {status.label}
//             </button>
//           ))}

//         </div>
//       )}

//       {/* Tasks */}
//       <div className="flex flex-col gap-3">

//         {tasks.map((task) => (
//           <TaskCard
//             key={task._id}
//             task={task}
//             onMove={moveTask}
//             loading={loading}
//           />
//         ))}

//       </div>

//       {/* Add Task */}
//       {availableStatuses.length > 0 && (
//         <button
//           onClick={() => setShowOptions((prev) => !prev)}
//           className="flex items-center justify-center gap-2 w-full mt-5 py-3 text-blue-600 hover:bg-blue-50 rounded-lg transition cursor-pointer"
//         >
//           <FiPlus size={18} />
//           <span>Add Task</span>
//         </button>
//       )}

//     </div>
//   );
// };

// export default Column;



// import { useState } from "react";
// import axios from "axios";
// import { FiPlus, FiX } from "react-icons/fi";
// import TaskCard from "./TaskCard";

// const Column = ({ title, tasks, currentStatus, onTaskMoved }) => {
//   const [showOptions, setShowOptions] = useState(false);
//   const [selectedTask, setSelectedTask] = useState(null);
//   const [loading, setLoading] = useState(false);

//   // Current column ke according available status
//   const getAvailableStatuses = () => {
//     if (currentStatus === "todo") {
//       return [
//         { label: "In Progress", value: "progress" },
//         { label: "Done", value: "done" },
//       ];
//     }

//     if (currentStatus === "progress") {
//       return [
//         { label: "Done", value: "done" },
//       ];
//     }

//     return [];
//   };

//   const availableStatuses = getAvailableStatuses();

//   // Kisi task ko move karna
//   const moveTask = async (task, newStatus) => {
//     try {
//       setLoading(true);

//       await axios.patch(
//         `http://localhost:3000/api/task/move-task/${task._id}`,
//         {
//           status: newStatus,
//         }
//       );

//       // Selection clear
//       setSelectedTask(null);

//       // Dropdown close
//       setShowOptions(false);

//       // Board ke tasks refresh
//       if (onTaskMoved) {
//         onTaskMoved();
//       }
//     } catch (error) {
//       console.error("Move Task Error:", error);
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <div className="relative bg-slate-100/70 rounded-xl p-4 min-h-[600px]">

//       {/* Column Header */}
//       <div className="flex items-center justify-between mb-5">

//         <div className="flex items-center gap-2">
//           <h2 className="text-xl font-semibold text-slate-900">
//             {title}
//           </h2>

//           <span className="flex items-center justify-center min-w-7 h-7 px-2 rounded-full bg-slate-200 text-sm text-slate-600">
//             {tasks.length}
//           </span>
//         </div>

//         {/* Plus Button */}
//         {availableStatuses.length > 0 && (
//           <button
//             onClick={() => {
//               setShowOptions((prev) => !prev);
//               setSelectedTask(null);
//             }}
//             className="p-1 text-slate-700 hover:bg-slate-200 rounded-lg cursor-pointer"
//           >
//             {showOptions ? (
//               <FiX size={22} />
//             ) : (
//               <FiPlus size={22} />
//             )}
//           </button>
//         )}
//       </div>

//       {/* Move Options */}
//       {showOptions && (
//         <div className="absolute right-4 top-14 z-20 w-64 bg-white border border-slate-200 rounded-lg shadow-lg p-2">

//           {/* Step 1 - Select Task */}
//           <p className="px-3 py-2 text-xs font-semibold text-slate-400 uppercase">
//             Select Task
//           </p>

//           {tasks.length === 0 ? (
//             <p className="px-3 py-2 text-sm text-slate-400">
//               No tasks available
//             </p>
//           ) : (
//             tasks.map((task) => (
//               <button
//                 key={task._id}
//                 onClick={() => setSelectedTask(task)}
//                 className={`w-full text-left px-3 py-2 rounded-md text-sm transition ${
//                   selectedTask?._id === task._id
//                     ? "bg-blue-100 text-blue-700"
//                     : "text-slate-700 hover:bg-slate-100"
//                 }`}
//               >
//                 {task.title}
//               </button>
//             ))
//           )}

//           {/* Step 2 - Select Destination */}
//           {selectedTask && (
//             <>
//               <div className="border-t border-slate-200 my-2" />

//               <p className="px-3 py-2 text-xs font-semibold text-slate-400 uppercase">
//                 Move "{selectedTask.title}" To
//               </p>

//               {availableStatuses.map((status) => (
//                 <button
//                   key={status.value}
//                   disabled={loading}
//                   onClick={() =>
//                     moveTask(selectedTask, status.value)
//                   }
//                   className="w-full text-left px-3 py-2 rounded-md text-sm text-slate-700 hover:bg-slate-100 disabled:opacity-50"
//                 >
//                   {loading ? "Moving..." : status.label}
//                 </button>
//               ))}
//             </>
//           )}
//         </div>
//       )}

//       {/* Tasks */}
//       <div className="flex flex-col gap-3">

//         {tasks.map((task) => (
//           <TaskCard
//             key={task._id}
//             task={task}
//             onMove={moveTask}
//             loading={loading}
//           />
//         ))}

//       </div>

//       {/* Add Task */}
//       {availableStatuses.length > 0 && (
//         <button
//           onClick={() => {
//             setShowOptions((prev) => !prev);
//             setSelectedTask(null);
//           }}
//           className="flex items-center justify-center gap-2 w-full mt-5 py-3 text-blue-600 hover:bg-blue-50 rounded-lg transition cursor-pointer"
//         >
//           <FiPlus size={18} />
//           <span>Add Task</span>
//         </button>
//       )}

//     </div>
//   );
// };

// export default Column;


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

  // Current column ke according destination status
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

  // Task ko current column mein move karna
  const moveTask = async (task) => {
    try {
      setLoading(true);

      await axios.patch(
        `http://localhost:3000/api/task/move-task/${task._id}`,
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
    <div className="relative bg-slate-100/70 rounded-xl p-4 min-h-[600px]">

      {/* Column Header */}
      <div className="flex items-center justify-between mb-5">

        <div className="flex items-center gap-2">
          <h2 className="text-xl font-semibold text-slate-900">
            {title}
          </h2>

          <span className="flex items-center justify-center min-w-7 h-7 px-2 rounded-full bg-slate-200 text-sm text-slate-600">
            {tasks.length}
          </span>
        </div>

        {/* Move Task Button */}
        {moveStatus && (
          <button
            onClick={() => setShowOptions((prev) => !prev)}
            className="p-1 text-slate-700 hover:bg-slate-200 rounded-lg cursor-pointer"
          >
            {showOptions ? (
              <FiX size={22} />
            ) : (
              <FiPlus size={22} />
            )}
          </button>
        )}
      </div>

      {/* Available Tasks Dropdown */}
      {showOptions && moveStatus && (
        <div className="absolute right-4 top-14 z-20 w-64 bg-white border border-slate-200 rounded-lg shadow-lg p-2">

          <p className="px-3 py-2 text-xs font-semibold text-slate-400 uppercase">
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
                className="w-full text-left px-3 py-2 rounded-md text-sm text-slate-700 hover:bg-slate-100 disabled:opacity-50"
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

      {/* Move Task Button */}
      {moveStatus && (
        <button
          onClick={() => setShowOptions((prev) => !prev)}
          className="flex items-center justify-center gap-2 w-full mt-5 py-3 text-blue-600 hover:bg-blue-50 rounded-lg transition cursor-pointer"
        >
          <FiPlus size={18} />
          <span>{moveStatus.label}</span>
        </button>
      )}

    </div>
  );
};

export default Column;