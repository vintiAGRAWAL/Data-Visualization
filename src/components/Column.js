import { Task } from "./Task";
import { useDroppable } from "@dnd-kit/core";
export const Column = ({ column, tasks }) => {
  const { setNodeRef } = useDroppable({ id: column.id });
  return (
    <div
      ref={setNodeRef}
      className="flex w-80 flex-col rounded-lg bg-neutral-800 p-4"
    >
      <h2 className={`mb-4 font-semibold text-neutral-400 ${column.color}`}>
        {column.title}
      </h2>
      <div className="flex flex-1 flex-col gap-4">
        {tasks.map((task) => {
          return <Task key={task.id} task={task}></Task>;
        })}
      </div>
    </div>
  );
};
