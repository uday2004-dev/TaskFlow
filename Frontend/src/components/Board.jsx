// import { useEffect, useState } from "react";
// import axios from "axios";
// import Column from "./Column";

// const Board = () => {
//   const [tasks, setTasks] = useState([]);

//   const getAllTasks = async () => {
//     try {
//       const response = await axios.get(
//         "http://localhost:3000/api/task/getAll-task"
//       );

//       setTasks(response.data.tasks);
//     } catch (error) {
//       console.error("Error fetching tasks:", error);
//     }
//   };

//   useEffect(() => {
//     getAllTasks();
//   }, []);

//   const todoTasks = tasks.filter(
//     (task) => task.status === "todo"
//   );

//   const progressTasks = tasks.filter(
//     (task) => task.status === "progress"
//   );

//   const doneTasks = tasks.filter(
//     (task) => task.status === "done"
//   );

//   return (
//     <section
//       className="
//         flex-1
//         grid
//         grid-cols-1
//         sm:grid-cols-2
//         lg:grid-cols-3
//         gap-4
//         lg:gap-5
//         p-4
//         sm:p-5
//         lg:p-7
//         bg-slate-50
//         overflow-y-auto
//       "
//     >

//       {/* TODO */}
//       <Column
//         title="To Do"
//         tasks={todoTasks}
//         currentStatus="todo"
//         availableTasks={[]}
//         onTaskMoved={getAllTasks}
//       />

//       {/* IN PROGRESS */}
//       <Column
//         title="In Progress"
//         tasks={progressTasks}
//         currentStatus="progress"
//         availableTasks={todoTasks}
//         onTaskMoved={getAllTasks}
//       />

//       {/* DONE */}
//       <Column
//         title="Done"
//         tasks={doneTasks}
//         currentStatus="done"
//         availableTasks={progressTasks}
//         onTaskMoved={getAllTasks}
//       />

//     </section>
//   );
// };

// export default Board;



import { useEffect, useState } from "react";
import axios from "axios";
import Column from "./Column";

const Board = () => {
  const [tasks, setTasks] = useState([]);

  const getAllTasks = async () => {
    try {
      const response = await axios.get(
        "http://localhost:3000/api/task/getAll-task"
      );

      setTasks(response.data.tasks);
    } catch (error) {
      console.error("Error fetching tasks:", error);
    }
  };

  useEffect(() => {
    getAllTasks();
  }, []);

  const todoTasks = tasks.filter(
    (task) => task.status === "todo"
  );

  const progressTasks = tasks.filter(
    (task) => task.status === "progress"
  );

  const doneTasks = tasks.filter(
    (task) => task.status === "done"
  );

  return (
    <section
      className="
        w-full
        grid
        grid-cols-1
        md:grid-cols-2
        xl:grid-cols-3
        gap-4
        sm:gap-5
      "
    >

      <Column
        title="To Do"
        tasks={todoTasks}
        currentStatus="todo"
        availableTasks={[]}
        onTaskMoved={getAllTasks}
      />

      <Column
        title="In Progress"
        tasks={progressTasks}
        currentStatus="progress"
        availableTasks={todoTasks}
        onTaskMoved={getAllTasks}
      />

      <Column
        title="Done"
        tasks={doneTasks}
        currentStatus="done"
        availableTasks={progressTasks}
        onTaskMoved={getAllTasks}
      />

    </section>
  );
};

export default Board;