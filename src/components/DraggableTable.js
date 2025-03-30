import React, { useState } from "react";
import { Column } from "./Column";
import { DndContext } from "@dnd-kit/core";
import { useDragDropContext, useDroppable, useDraggable } from "@dnd-kit/core";

const Columns = [
  { id: "TODO", title: "To Do" },
  { id: "IN_PROGRESS", title: "IN Progress" },
  { id: "DONE", title: "Done" },
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
              />
            );
          })}
        </DndContext>
      </div>
    </div>
  );
};
