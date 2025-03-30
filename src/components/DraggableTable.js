import React, { useState } from "react";
import { Column } from "./Column";
import { DndContext } from "@dnd-kit/core";

const Columns = [
  {
    id: "TODO",
    title: "To Do",
    color: "text-purple-600",
    bgcolor: "bg-purple-600",
  },
  {
    id: "IN_PROGRESS",
    title: "IN Progress",
    color: "text-yellow-500",
    bgcolor: "bg-yellow-500",
  },
  {
    id: "Blocked",
    title: "Blocked",
    color: "text-red-500",
    bgcolor: "bg-red-500",
  },
  {
    id: "DONE",
    title: "Done",
    color: "text-green-600",
    bgcolor: "bg-green-600",
  },
];

const Initial_Tasks = [
  {
    id: "1",
    title: "Task1",
    desc: "Complete Task1",
    status: "TODO",
  },
  {
    id: "4",
    title: "Task4",
    desc: "Complete Task4",
    status: "TODO",
  },
  {
    id: "2",
    title: "Task2",
    desc: "Complete Task2",
    status: "IN_PROGRESS",
  },
  {
    id: "6",
    title: "Task6",
    desc: "Complete Task6",
    status: "IN_PROGRESS",
  },
  {
    id: "9",
    title: "Task9",
    desc: "Complete Task9",
    status: "IN_PROGRESS",
  },

  {
    id: "3",
    title: "Task3",
    desc: "Complete Task3",
    status: "DONE",
  },
  {
    id: "7",
    title: "Task7",
    desc: "Complete Task7",
    status: "DONE",
  },
  {
    id: "9",
    title: "Task9",
    desc: "Complete Task9",
    status: "DONE",
  },
  {
    id: "10",
    title: "Task10",
    desc: "Complete Task10",
    status: "DONE",
  },
  {
    id: "11",
    title: "Task11",
    desc: "Complete Task11",
    status: "DONE",
  },
];

export const DraggableTable = () => {
  const [tasks, setTasks] = useState(Initial_Tasks);

  const handleAddTask = (columnId, title, desc) => {
    const newTask = {
      id: Date.now().toString(),
      title,
      desc,
      status: columnId,
    };
    setTasks((prevTasks) => [...prevTasks, newTask]);
  };

  const handleDragEnd = (event) => {
    const { active, over } = event;
    if (!over) {
      return;
    }

    const taskId = String(active.id);
    const newStatus = over.id;

    setTasks((prevTasks) =>
      prevTasks.map((task) =>
        task.id === taskId
          ? {
              ...task,
              status: newStatus,
            }
          : task
      )
    );
  };
  return (
    <div className="w-full flex flex-col items-center">
      <h2 className="text-center font-extrabold md:text-4xl text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500 p-4 rounded-lg shadow-lg bg-neutral-900 w-full max-w-screen-lg">
        ProjectHub: Task Management & Progress Dashboard.
      </h2>

      <div className="p-4 flex justify-center w-full">
        <div className="flex gap-8 p-6 border-2 border-gray-300 rounded-lg shadow-lg bg-neutral-600 w-full max-w-screen-lg">
          <DndContext onDragEnd={handleDragEnd}>
            {Columns.map((c) => (
              <Column
                key={c.id}
                column={c}
                tasks={tasks.filter((task) => task.status === c.id)}
                onAddTask={handleAddTask}
              />
            ))}
          </DndContext>
        </div>
      </div>
      <h1 className="text-center text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-500 drop-shadow-lg p-4 uppercase tracking-widest">
        ✨ Summary Of The Week ✨
      </h1>
    </div>
  );
};
