// import {
//   FiCheckSquare,
//   FiColumns,
//   FiFilter,
//   FiSettings,
// } from "react-icons/fi";

// const Sidebar = () => {
//   return (
//     <aside
//       className="
//         w-full
//         lg:w-[220px]
//         lg:min-h-screen
//         shrink-0
//         bg-[#0f1f35]
//         text-white
//         px-3
//         sm:px-4
//         py-3
//         lg:py-6
//         flex
//         flex-col
//       "
//     >

//       {/* Logo */}
//       <div className="flex items-center justify-between lg:justify-start gap-3 px-2 mb-4 lg:mb-10">

//         <div className="flex items-center gap-3">

//           <div className="w-9 h-9 shrink-0 bg-blue-600 rounded-lg flex items-center justify-center">
//             <FiCheckSquare size={22} />
//           </div>

//           <span className="text-xl sm:text-2xl font-bold tracking-tight">
//             Task<span className="text-blue-500">Flow</span>
//           </span>

//         </div>

//       </div>


//       {/* Navigation */}
//       <nav
//         className="
//           flex
//           flex-row
//           lg:flex-col
//           gap-2
//           overflow-x-auto
//         "
//       >

//         {/* Board */}
//         <button
//           className="
//             shrink-0
//             lg:w-full
//             flex
//             items-center
//             justify-center
//             lg:justify-start
//             gap-3
//             px-4
//             py-2.5
//             lg:py-3
//             rounded-lg
//             bg-blue-600
//             text-white
//             text-left
//             cursor-pointer
//           "
//         >
//           <FiColumns size={20} />

//           <span className="font-medium">
//             Board
//           </span>
//         </button>


//         {/* Filters */}
//         <button
//           className="
//             shrink-0
//             lg:w-full
//             flex
//             items-center
//             justify-center
//             lg:justify-start
//             gap-3
//             px-4
//             py-2.5
//             lg:py-3
//             rounded-lg
//             text-slate-300
//             hover:bg-white/10
//             hover:text-white
//             transition
//             text-left
//             cursor-pointer
//           "
//         >
//           <FiFilter size={20} />

//           <span className="font-medium">
//             Filters
//           </span>
//         </button>


//         {/* Settings */}
//         <button
//           className="
//             shrink-0
//             lg:w-full
//             flex
//             items-center
//             justify-center
//             lg:justify-start
//             gap-3
//             px-4
//             py-2.5
//             lg:py-3
//             rounded-lg
//             text-slate-300
//             hover:bg-white/10
//             hover:text-white
//             transition
//             text-left
//             cursor-pointer
//           "
//         >
//           <FiSettings size={20} />

//           <span className="font-medium">
//             Settings
//           </span>
//         </button>

//       </nav>


//       {/* Bottom */}
//       <div className="hidden lg:block mt-auto px-2 text-sm text-slate-500">
//         v1.0.0
//       </div>

//     </aside>
//   );
// };

// export default Sidebar;


import {
  FiCheckSquare,
  FiColumns,
  FiFilter,
  FiSettings,
} from "react-icons/fi";

const Sidebar = () => {
  return (
    <aside
      className="
        w-full
        lg:w-[220px]
        lg:min-h-screen
        shrink-0
        bg-[#0f1f35]
        text-white
        px-3
        sm:px-4
        py-4
        lg:py-6
      "
    >

      {/* Logo */}
      <div className="
        flex
        items-center
        justify-between
        lg:justify-start
        gap-3
        px-2
        mb-4
        lg:mb-10
      ">

        <div className="flex items-center gap-3">

          <div className="
            w-9
            h-9
            shrink-0
            bg-blue-600
            rounded-lg
            flex
            items-center
            justify-center
          ">
            <FiCheckSquare size={22} />
          </div>

          <span className="
            text-xl
            sm:text-2xl
            font-bold
            tracking-tight
          ">
            Task<span className="text-blue-500">Flow</span>
          </span>

        </div>

        <span className="lg:hidden text-xs text-slate-500">
          v1.0.0
        </span>

      </div>

      {/* Navigation */}
      <nav className="
        flex
        flex-row
        lg:flex-col
        gap-2
        overflow-x-auto
      ">

        {/* Board */}
        <button
          className="
            shrink-0
            lg:w-full
            flex
            items-center
            justify-center
            lg:justify-start
            gap-3
            px-4
            py-3
            rounded-lg
            bg-blue-600
            text-white
            text-left
            cursor-pointer
          "
        >
          <FiColumns size={20} />

          <span className="font-medium hidden sm:inline">
            Board
          </span>
        </button>

        {/* Filters */}
        <button
          className="
            shrink-0
            lg:w-full
            flex
            items-center
            justify-center
            lg:justify-start
            gap-3
            px-4
            py-3
            rounded-lg
            text-slate-300
            hover:bg-white/10
            hover:text-white
            transition
            text-left
            cursor-pointer
          "
        >
          <FiFilter size={20} />

          <span className="font-medium hidden sm:inline">
            Filters
          </span>
        </button>

        {/* Settings */}
        <button
          className="
            shrink-0
            lg:w-full
            flex
            items-center
            justify-center
            lg:justify-start
            gap-3
            px-4
            py-3
            rounded-lg
            text-slate-300
            hover:bg-white/10
            hover:text-white
            transition
            text-left
            cursor-pointer
          "
        >
          <FiSettings size={20} />

          <span className="font-medium hidden sm:inline">
            Settings
          </span>
        </button>

      </nav>

      {/* Desktop Bottom */}
      <div className="
        hidden
        lg:block
        mt-auto
        px-2
        text-sm
        text-slate-500
      ">
        v1.0.0
      </div>

    </aside>
  );
};

export default Sidebar;