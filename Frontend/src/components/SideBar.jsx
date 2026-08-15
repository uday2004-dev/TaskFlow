import {
  FiCheckSquare,
  FiColumns,
  FiFilter,
  FiSettings,
} from "react-icons/fi";

const Sidebar = () => {
  return (
    <aside className="w-[220px] min-h-screen shrink-0 bg-[#0f1f35] text-white px-4 py-6 flex flex-col">

      {/* Logo */}
      <div className="flex items-center gap-3 px-2 mb-10">

        <div className="w-9 h-9 shrink-0 bg-blue-600 rounded-lg flex items-center justify-center">
          <FiCheckSquare size={22} />
        </div>

        <span className="text-2xl font-bold tracking-tight">
          Task<span className="text-blue-500">Flow</span>
        </span>

      </div>


      {/* Navigation */}
      <nav className="flex flex-col gap-2">

        {/* Board */}
        <button
          className="
            w-full
            flex
            items-center
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

          <span className="font-medium">
            Board
          </span>
        </button>


        {/* Filters */}
        <button
          className="
            w-full
            flex
            items-center
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

          <span className="font-medium">
            Filters
          </span>
        </button>


        {/* Settings */}
        <button
          className="
            w-full
            flex
            items-center
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

          <span className="font-medium">
            Settings
          </span>
        </button>

      </nav>


      {/* Bottom */}
      <div className="mt-auto px-2 text-sm text-slate-500">
        v1.0.0
      </div>

    </aside>
  );
};

export default Sidebar;