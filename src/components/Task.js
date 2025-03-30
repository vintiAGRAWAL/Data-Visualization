import { useDraggable } from "@dnd-kit/core";
export const Task = ({ task }) => {
  const { attributes, listeners, setNodeRef, transform } = useDraggable({
    id: task.id,
  });

  const style = transform
    ? {
        transform: `translate(${transform.x}px, ${transform.y}px)`,
      }
    : undefined;

  const statusColor = {
    TODO: "bg-purple-500",
    IN_PROGRESS: "bg-yellow-500",
    DONE: "bg-green-700",
    Blocked: "bg-red-500",
  };

  return (
    <div
      ref={setNodeRef}
      {...listeners}
      {...attributes}
      className={`cursor-grab rounded-lg bg-neutral-700 p-4 shadow-sm hover:shadow-md ${
        statusColor[task.status] || "bg-green-600"
      }`}
      style={style}
    >
      <h3 className="font-medium text-black-100">{task.title}</h3>
      <p className="mt-2 text-sm text-gray-100">{task.desc}</p>
    </div>
  );
};
