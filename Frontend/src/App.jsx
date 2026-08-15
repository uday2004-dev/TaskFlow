import Sidebar from "./components/SideBar";
import Header from "./components/Header";
import Board from "./components/Board";
import TaskDetails from "./components/TaskDetails";
import "./index.css";

function App() {
  return (
    <div className="flex min-h-screen bg-slate-50">

      {/* Sidebar */}
      <Sidebar />

      {/* Main */}
      <main className="flex-1 min-w-0">

        {/* Header */}
        <Header />

        {/* Board + Details */}
        <div className="flex gap-5 p-7">

          <Board />

          <TaskDetails />

        </div>

      </main>

    </div>
  );
}

export default App;