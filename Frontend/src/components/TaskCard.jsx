


// import { FiMoreVertical } from "react-icons/fi";

// const TaskCard = ({ task }) => {
//   return (
//     <div className="w-full bg-white rounded-xl p-3 sm:p-4 shadow-sm border border-slate-100">

//       {/* Top */}
//       <div className="flex items-start justify-between gap-2 sm:gap-3">

//         <h3 className="min-w-0 flex-1 font-semibold text-sm sm:text-base text-slate-900 break-words">
//           {task.title}
//         </h3>

//         <button
//           className="
//             shrink-0
//             p-1
//             text-slate-500
//             hover:text-slate-900
//             hover:bg-slate-100
//             rounded-md
//             transition
//             cursor-pointer
//           "
//         >
//           <FiMoreVertical size={18} />
//         </button>

//       </div>


//       {/* Description */}
//       {task.description && (
//         <p className="mt-2 sm:mt-3 text-xs sm:text-sm leading-5 sm:leading-6 text-slate-500 break-words">
//           {task.description}
//         </p>
//       )}


//       {/* Bottom */}
//       <div className="mt-3 sm:mt-4 flex items-center justify-between gap-2">

//         {/* Priority */}
//         <span
//           className={`
//             inline-flex
//             items-center
//             px-2.5
//             sm:px-3
//             py-1
//             rounded-full
//             text-[11px]
//             sm:text-xs
//             font-medium
//             shrink-0
//             ${
//               task.priority === "high"
//                 ? "bg-red-100 text-red-600"
//                 : task.priority === "medium"
//                 ? "bg-orange-100 text-orange-600"
//                 : "bg-green-100 text-green-600"
//             }
//           `}
//         >
//           {task.priority
//             ? task.priority.charAt(0).toUpperCase() +
//               task.priority.slice(1)
//             : "Low"}
//         </span>

//       </div>

//     </div>
//   );
// };

// export default TaskCard;


import { FiMoreVertical } from "react-icons/fi";

const TaskCard = ({ task }) => {
  return (
    <div className="
      w-full
      bg-white
      rounded-xl
      p-3
      sm:p-4
      shadow-sm
      border
      border-slate-100
    ">

      <div className="
        flex
        items-start
        justify-between
        gap-2
      ">

        <h3 className="
          font-semibold
          text-sm
          sm:text-base
          text-slate-900
          break-words
          min-w-0
        ">
          {task.title}
        </h3>

        <button
          className="
            text-slate-500
            hover:text-slate-900
            cursor-pointer
            shrink-0
          "
        >
          <FiMoreVertical size={18} />
        </button>

      </div>

      {task.description && (
        <p className="
          mt-2
          sm:mt-3
          text-xs
          sm:text-sm
          leading-5
          sm:leading-6
          text-slate-500
          break-words
        ">
          {task.description}
        </p>
      )}

      <div className="mt-3 sm:mt-4">

        <span
          className={`
            inline-block
            px-2.5
            sm:px-3
            py-1
            rounded-full
            text-xs
            font-medium

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