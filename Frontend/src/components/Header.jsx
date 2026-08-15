// import { useState } from "react";
// import { FiSearch, FiPlus, FiX } from "react-icons/fi";
// import axios from "axios";

// const Header = () => {
//   const [showForm, setShowForm] = useState(false);

//   const [formData, setFormData] = useState({
//     title: "",
//     description: "",
//     priority: "medium",
//   });

//   const handleChange = (e) => {
//     const { name, value } = e.target;

//     setFormData((prev) => ({
//       ...prev,
//       [name]: value,
//     }));
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     try {
//       const response = await axios.post(
//         "http://localhost:3000/api/task/create-task",
//         formData
//       );

//       console.log(response.data);

//       setFormData({
//         title: "",
//         description: "",
//         priority: "medium",
//       });

//       setShowForm(false);

//       // Board refresh yahan parent se handle kiya ja sakta hai
//     } catch (error) {
//       console.error("Create Task Error:", error);
//     }
//   };

//   return (
//     <>
//       {/* HEADER */}
//       <header className="flex flex-col gap-5 lg:flex-row lg:items-center lg:justify-between bg-white border-b border-slate-200 px-4 sm:px-6 lg:px-8 py-5 lg:py-7">

//         {/* LEFT */}
//         <div>
//           <h1 className="text-2xl sm:text-3xl font-bold text-slate-900">
//             TaskFlow Board
//           </h1>

//           <p className="mt-1 text-sm sm:text-base text-slate-500">
//             A simple task board for your team
//           </p>
//         </div>

//         {/* RIGHT */}
//         <div className="flex flex-col sm:flex-row sm:flex-wrap items-stretch sm:items-center gap-3 w-full lg:w-auto">

//           {/* SEARCH */}
//           <div className="flex items-center gap-3 w-full sm:w-60 h-11 sm:h-12 px-4 border border-slate-200 rounded-lg bg-white">

//             <FiSearch
//               size={20}
//               className="text-slate-500 shrink-0"
//             />

//             <input
//               type="text"
//               placeholder="Search tasks..."
//               className="w-full outline-none text-sm text-slate-700 placeholder:text-slate-400"
//             />

//           </div>

//           {/* PRIORITY FILTER */}
//           <select
//             className="w-full sm:w-48 h-11 sm:h-12 px-4 border border-slate-200 rounded-lg bg-white text-sm sm:text-base text-slate-600 outline-none cursor-pointer"
//           >
//             <option value="">All Priorities</option>
//             <option value="high">High</option>
//             <option value="medium">Medium</option>
//             <option value="low">Low</option>
//           </select>

//           {/* NEW TASK */}
//           <button
//             onClick={() => setShowForm(true)}
//             className="flex items-center justify-center gap-2 w-full sm:w-auto h-11 sm:h-12 px-5 bg-blue-600 hover:bg-blue-700 text-white text-sm sm:text-base font-medium rounded-lg transition cursor-pointer"
//           >
//             <FiPlus size={20} />
//             New Task
//           </button>

//         </div>
//       </header>

//       {/* CREATE TASK MODAL */}
//       {showForm && (
//         <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 p-4 sm:p-6">

//           <div className="w-full max-w-lg max-h-[90vh] overflow-y-auto bg-white rounded-xl shadow-2xl p-4 sm:p-6">

//             {/* MODAL HEADER */}
//             <div className="flex items-center justify-between mb-5 sm:mb-6">

//               <h2 className="text-xl sm:text-2xl font-bold text-slate-900">
//                 Create New Task
//               </h2>

//               <button
//                 onClick={() => setShowForm(false)}
//                 className="p-2 text-slate-500 hover:text-slate-900 hover:bg-slate-100 rounded-lg transition cursor-pointer shrink-0"
//               >
//                 <FiX size={22} />
//               </button>

//             </div>

//             {/* FORM */}
//             <form onSubmit={handleSubmit}>

//               {/* TITLE */}
//               <div className="mb-4 sm:mb-5">

//                 <label className="block mb-2 text-sm font-semibold text-slate-700">
//                   Title
//                 </label>

//                 <input
//                   type="text"
//                   name="title"
//                   value={formData.title}
//                   onChange={handleChange}
//                   placeholder="Enter task title"
//                   required
//                   className="w-full px-3 sm:px-4 py-2.5 sm:py-3 text-sm sm:text-base border border-slate-200 rounded-lg outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
//                 />

//               </div>

//               {/* DESCRIPTION */}
//               <div className="mb-4 sm:mb-5">

//                 <label className="block mb-2 text-sm font-semibold text-slate-700">
//                   Description
//                 </label>

//                 <textarea
//                   name="description"
//                   value={formData.description}
//                   onChange={handleChange}
//                   placeholder="Enter task description"
//                   rows={4}
//                   className="w-full px-3 sm:px-4 py-2.5 sm:py-3 text-sm sm:text-base border border-slate-200 rounded-lg outline-none resize-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
//                 />

//               </div>

//               {/* PRIORITY */}
//               <div className="mb-5 sm:mb-6">

//                 <label className="block mb-2 text-sm font-semibold text-slate-700">
//                   Priority
//                 </label>

//                 <select
//                   name="priority"
//                   value={formData.priority}
//                   onChange={handleChange}
//                   className="w-full px-3 sm:px-4 py-2.5 sm:py-3 text-sm sm:text-base border border-slate-200 rounded-lg bg-white outline-none cursor-pointer focus:border-blue-500"
//                 >
//                   <option value="low">Low</option>
//                   <option value="medium">Medium</option>
//                   <option value="high">High</option>
//                 </select>

//               </div>

//               {/* ACTIONS */}
//               <div className="flex flex-col-reverse sm:flex-row sm:justify-end gap-3">

//                 <button
//                   type="button"
//                   onClick={() => setShowForm(false)}
//                   className="w-full sm:w-auto px-5 py-2.5 sm:py-3 border border-slate-200 rounded-lg text-slate-600 hover:bg-slate-50 transition cursor-pointer"
//                 >
//                   Cancel
//                 </button>

//                 <button
//                   type="submit"
//                   className="w-full sm:w-auto px-5 py-2.5 sm:py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-medium transition cursor-pointer"
//                 >
//                   Create Task
//                 </button>

//               </div>

//             </form>

//           </div>

//         </div>
//       )}
//     </>
//   );
// };

// export default Header;


import { useState } from "react";
import { FiSearch, FiPlus, FiX } from "react-icons/fi";
import axios from "axios";

const Header = ({ search, setSearch }) => {
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

  // const handleSubmit = async (e) => {
  //   e.preventDefault();

  //   try {
  //     const response = await axios.post(
  //       "http://localhost:3000/api/task/create-task",
  //       formData
  //     );

  //     console.log(response.data);

  //     setFormData({
  //       title: "",
  //       description: "",
  //       priority: "medium",
  //     });

  //     setShowForm(false);

  //   } catch (error) {
  //     console.error("Create Task Error:", error);
  //   }
  // };


  const handleSubmit = async (e) => {
  e.preventDefault();

  try {
    const response = await axios.post(
      `${import.meta.env.VITE_API_URL}/api/task/create-task`,
      formData
    );

    console.log(response.data);

    setFormData({
      title: "",
      description: "",
      priority: "medium",
    });

    setShowForm(false);

  } catch (error) {
    console.error("Create Task Error:", error);
  }
};

  return (
    <>
      {/* HEADER */}
      <header className="flex flex-col gap-5 lg:flex-row lg:items-center lg:justify-between bg-white border-b border-slate-200 px-4 sm:px-6 lg:px-8 py-5 lg:py-7">

        {/* LEFT */}
        <div>
          <h1 className="text-2xl sm:text-3xl font-bold text-slate-900">
            TaskFlow Board
          </h1>

          <p className="mt-1 text-sm sm:text-base text-slate-500">
            A simple task board for your team
          </p>
        </div>

        {/* RIGHT */}
        <div className="flex flex-col sm:flex-row sm:flex-wrap items-stretch sm:items-center gap-3 w-full lg:w-auto">

          {/* SEARCH */}
          <div className="flex items-center gap-3 w-full sm:w-60 h-11 sm:h-12 px-4 border border-slate-200 rounded-lg bg-white">

            <FiSearch
              size={20}
              className="text-slate-500 shrink-0"
            />

            <input
              type="text"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Search tasks..."
              className="w-full outline-none text-sm text-slate-700 placeholder:text-slate-400"
            />

          </div>

          {/* PRIORITY FILTER */}
          <select
            className="w-full sm:w-48 h-11 sm:h-12 px-4 border border-slate-200 rounded-lg bg-white text-sm sm:text-base text-slate-600 outline-none cursor-pointer"
          >
            <option value="">All Priorities</option>
            <option value="high">High</option>
            <option value="medium">Medium</option>
            <option value="low">Low</option>
          </select>

          {/* NEW TASK */}
          <button
            onClick={() => setShowForm(true)}
            className="flex items-center justify-center gap-2 w-full sm:w-auto h-11 sm:h-12 px-5 bg-blue-600 hover:bg-blue-700 text-white text-sm sm:text-base font-medium rounded-lg transition cursor-pointer"
          >
            <FiPlus size={20} />
            New Task
          </button>

        </div>
      </header>

      {/* CREATE TASK MODAL */}
      {showForm && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 p-4 sm:p-6">

          <div className="w-full max-w-lg max-h-[90vh] overflow-y-auto bg-white rounded-xl shadow-2xl p-4 sm:p-6">

            {/* HEADER */}
            <div className="flex items-center justify-between mb-5 sm:mb-6">

              <h2 className="text-xl sm:text-2xl font-bold text-slate-900">
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
              <div className="mb-4 sm:mb-5">

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
                  className="w-full px-3 sm:px-4 py-2.5 sm:py-3 text-sm sm:text-base border border-slate-200 rounded-lg outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
                />

              </div>

              {/* DESCRIPTION */}
              <div className="mb-4 sm:mb-5">

                <label className="block mb-2 text-sm font-semibold text-slate-700">
                  Description
                </label>

                <textarea
                  name="description"
                  value={formData.description}
                  onChange={handleChange}
                  placeholder="Enter task description"
                  rows={4}
                  className="w-full px-3 sm:px-4 py-2.5 sm:py-3 text-sm sm:text-base border border-slate-200 rounded-lg outline-none resize-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
                />

              </div>

              {/* PRIORITY */}
              <div className="mb-5 sm:mb-6">

                <label className="block mb-2 text-sm font-semibold text-slate-700">
                  Priority
                </label>

                <select
                  name="priority"
                  value={formData.priority}
                  onChange={handleChange}
                  className="w-full px-3 sm:px-4 py-2.5 sm:py-3 text-sm sm:text-base border border-slate-200 rounded-lg bg-white outline-none cursor-pointer focus:border-blue-500"
                >
                  <option value="low">Low</option>
                  <option value="medium">Medium</option>
                  <option value="high">High</option>
                </select>

              </div>

              {/* ACTIONS */}
              <div className="flex flex-col-reverse sm:flex-row sm:justify-end gap-3">

                <button
                  type="button"
                  onClick={() => setShowForm(false)}
                  className="w-full sm:w-auto px-5 py-2.5 sm:py-3 border border-slate-200 rounded-lg text-slate-600 hover:bg-slate-50 transition cursor-pointer"
                >
                  Cancel
                </button>

                <button
                  type="submit"
                  className="w-full sm:w-auto px-5 py-2.5 sm:py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-medium transition cursor-pointer"
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