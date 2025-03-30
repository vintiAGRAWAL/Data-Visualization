import React, { useState } from "react";
import { Column } from "./Column";
import { DndContext } from "@dnd-kit/core";

const Columns = [
  { id: "TODO", title: "To Do", color: "text-red-500", bgcolor: "bg-red-500" },
  {
    id: "IN_PROGRESS",
    title: "IN Progress",
    color: "text-yellow-500",
    bgcolor: "bg-yellow-500",
  },
  {
    id: "DONE",
    title: "Done",
    color: "text-green-500",
    bgcolor: "bg-green-500",
  },
];

const Initial_Tasks = [
  {
    id: "1",
    title: "ReviewColection",
    desc: "Add Beta Tag to the page",
    status: "TODO",
  },
  {
    id: "2",
    title: "Instrumentation",
    desc: "Add tracking mechanism on the page",
    status: "IN_PROGRESS",
  },
  {
    id: "3",
    title: "Design Review",
    desc: "Make the design ready for development",
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
    <div className="p-4">
      <div className="flex gap-8">
        <DndContext onDragEnd={handleDragEnd}>
          {Columns.map((c) => {
            return (
              <Column
                key={c.id}
                column={c}
                tasks={tasks.filter((task) => task.status === c.id)}
                onAddTask={handleAddTask}
              />
            );
          })}
        </DndContext>
      </div>
    </div>
  );
};
