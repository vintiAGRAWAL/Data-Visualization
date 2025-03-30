import { Task } from "./Task";
import { useDroppable } from "@dnd-kit/core";
import { useState } from "react";
export const Column = ({ column, tasks, onAddTask }) => {
  const { setNodeRef } = useDroppable({ id: column.id });
  const [newTask, setNewTask] = useState({ title: "", desc: "" });
  const [isAdding, setIsAdding] = useState(false);

  const handleAddTask = () => {
    if (newTask.title.trim() === "" && newTask.desc.trim() === "") return;
    onAddTask(column.id, newTask.title, newTask.desc);
    setNewTask({ title: "", desc: "" });
    setIsAdding(false);
  };
  return (
    <div
      ref={setNodeRef}
      className="flex w-80 flex-col rounded-lg bg-neutral-800 p-4"
    >
      <div className="flex justify-between items-center mb-4">
        <h2 className={`mb-4 font-semibold text-neutral-400 ${column.color}`}>
          {column.title}
        </h2>
        <button
          className={`text-white bg-green-500 rounded-full w-7 h-7 flex items-center justify-center ${column.bgcolor}`}
          onClick={() => setIsAdding(!isAdding)}
        >
          +
        </button>
      </div>

      {isAdding && (
        <div classNamw="mb-4">
          <input
            type="text"
            placeholder="Task Title"
            value={newTask.title}
            onChange={(e) => setNewTask({ ...newTask, title: e.target.value })}
            className="w-full p-2 mb-2 text-black rounded"
          ></input>
          <input
            type="text"
            placeholder="Task Description"
            value={newTask.desc}
            onChange={(e) => setNewTask({ ...newTask, desc: e.target.value })}
            className="w-full p-2 mb-2 text-black rounded"
          ></input>
          <button
            onClick={handleAddTask}
            className={`w-full bg-blue-500 text-white p-2 rounded mb-2 ${column.bgcolor}`}
          >
            Add Task
          </button>
        </div>
      )}
      <div className="flex flex-1 flex-col gap-4">
        {tasks.map((task) => {
          return <Task key={task.id} task={task}></Task>;
        })}
      </div>
    </div>
  );
};
