// import Sidebar from "./components/SideBar";
// import Header from "./components/Header";
// import Board from "./components/Board";
// import TaskDetails from "./components/TaskDetails";
// import "./index.css";

// function App() {
//   return (
//     <div className="min-h-screen bg-slate-50">

//       {/* Main App Layout */}
//       <div className="flex flex-col lg:flex-row min-h-screen">

//         {/* Sidebar */}
//         <Sidebar />

//         {/* Main Content */}
//         <main className="flex-1 min-w-0">

//           {/* Header */}
//           <Header />

//           {/* Board + Task Details */}
//           <div
//             className="
//               flex
//               flex-col
//               xl:flex-row
//               gap-4
//               lg:gap-5
//               p-4
//               sm:p-5
//               lg:p-7
//               min-w-0
//             "
//           >

//             {/* Board */}
//             <div className="flex-1 min-w-0">
//               <Board />
//             </div>

//             {/* Task Details */}
//             <TaskDetails />
//                {/* <TaskDetails search={search} /> */}

//           </div>

//         </main>

//       </div>

//     </div>
//   );
// }

// export default App;

// import Sidebar from "./components/SideBar";
// import Header from "./components/Header";
// import Board from "./components/Board";
// import TaskDetails from "./components/TaskDetails";
// import "./index.css";

// function App() {
//   return (
//     <div className="min-h-screen bg-slate-50">

//       <div className="flex min-h-screen">

//         {/* Sidebar */}
//         <Sidebar />

//         {/* Main Content */}
//         <main className="flex-1 min-w-0">

//           {/* Header */}
//           <Header />

//           {/* Board + Details */}
//           <div className="
//             flex
//             flex-col
//             xl:flex-row
//             gap-5
//             p-4
//             sm:p-5
//             lg:p-7
//           ">

//             {/* Board */}
//             <div className="flex-1 min-w-0">
//               <Board />
//             </div>

//             {/* Task Details */}
//             <TaskDetails />

//           </div>

//         </main>

//       </div>

//     </div>
//   );
// }

// export default App;




import { useState } from "react";
import Sidebar from "./components/SideBar";
import Header from "./components/Header";
import Board from "./components/Board";
import TaskDetails from "./components/TaskDetails";
import "./index.css";

function App() {
  const [search, setSearch] = useState("");

  return (
    <div className="min-h-screen bg-slate-50">

      <div className="flex flex-col lg:flex-row min-h-screen">

        <Sidebar />

        <main className="flex-1 min-w-0">

          <Header
            search={search}
            setSearch={setSearch}
          />

          <div className="
            flex
            flex-col
            xl:flex-row
            gap-4
            sm:gap-5
            p-4
            sm:p-5
            lg:p-7
          ">

            <div className="flex-1 min-w-0">
              <Board />
            </div>

            <TaskDetails search={search} />

          </div>

        </main>

      </div>

    </div>
  );
}

export default App;