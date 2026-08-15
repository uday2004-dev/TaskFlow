// // import { useEffect, useState } from "react";
// // import axios from "axios";
// // import Column from "./Column";

// // const Board = () => {
// //   const [tasks, setTasks] = useState([]);

// //   const getAllTasks = async () => {
// //     try {
// //       const response = await axios.get(
// //         "http://localhost:3000/api/task/getAll-task"
// //       );

// //       setTasks(response.data.tasks);
// //     } catch (error) {
// //       console.error("Error fetching tasks:", error);
// //     }
// //   };

// //   useEffect(() => {
// //     getAllTasks();
// //   }, []);

// //   // Status ke according tasks
// //   const todoTasks = tasks.filter(
// //     (task) => task.status === "todo"
// //   );

// //   const progressTasks = tasks.filter(
// //     (task) => task.status === "progress"
// //   );

// //   const doneTasks = tasks.filter(
// //     (task) => task.status === "done"
// //   );

// //   return (
// //     <section className="flex-1 grid grid-cols-3 gap-5 p-7 bg-slate-50">

// //       {/* TODO */}
// //       <Column
// //         title="To Do"
// //         tasks={todoTasks}
// //       />

// //       {/* IN PROGRESS */}
// //       <Column
// //         title="In Progress"
// //         tasks={progressTasks}
// //       />

// //       {/* DONE */}
// //       <Column
// //         title="Done"
// //         tasks={doneTasks}
// //       />

// //     </section>
// //   );
// // };

// // export default Board;

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

//   // Status ke according tasks
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
//     <section className="flex-1 grid grid-cols-3 gap-5 p-7 bg-slate-50">

//       {/* TODO */}
//       <Column
//         title="To Do"
//         tasks={todoTasks}
//         currentStatus="todo"
//       />

//       {/* IN PROGRESS */}
//       <Column
//         title="In Progress"
//         tasks={progressTasks}
//         currentStatus="progress"
//       />

//       {/* DONE */}
//       <Column
//         title="Done"
//         tasks={doneTasks}
//         currentStatus="done"
//       />

//     </section>
//   );
// };

// export default Board;


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

//   // Status ke according tasks
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
//     <section className="flex-1 grid grid-cols-3 gap-5 p-7 bg-slate-50">

//       {/* TODO */}
//       <Column
//         title="To Do"
//         tasks={todoTasks}
//         currentStatus="todo"
//         onTaskMoved={getAllTasks}
//       />

//       {/* IN PROGRESS */}
//       <Column
//         title="In Progress"
//         tasks={progressTasks}
//         currentStatus="progress"
//         onTaskMoved={getAllTasks}
//       />

//       {/* DONE */}
//       <Column
//         title="Done"
//         tasks={doneTasks}
//         currentStatus="done"
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
    <section className="flex-1 grid grid-cols-3 gap-5 p-7 bg-slate-50">

      {/* TODO */}
      <Column
        title="To Do"
        tasks={todoTasks}
        currentStatus="todo"

        // Todo mein add karne ke liye abhi koi previous
        // column nahi hai
        availableTasks={[]}

        onTaskMoved={getAllTasks}
      />

      {/* IN PROGRESS */}
      <Column
        title="In Progress"
        tasks={progressTasks}
        currentStatus="progress"

        // Todo ke tasks yahan available honge
        availableTasks={todoTasks}

        onTaskMoved={getAllTasks}
      />

      {/* DONE */}
      <Column
        title="Done"
        tasks={doneTasks}
        currentStatus="done"

        // Sirf Progress ke tasks yahan available honge
        availableTasks={progressTasks}

        onTaskMoved={getAllTasks}
      />

    </section>
  );
};

export default Board;