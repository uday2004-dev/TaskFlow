import { useEffect, useState } from "react";
import axios from "axios";
import Column from "./Column";

const Board = () => {
  const [tasks, setTasks] = useState([]);


  const getAllTasks = async () => {
  try {
    const response = await axios.get(
      `${import.meta.env.VITE_API_URL}/api/task/getAll-task`
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