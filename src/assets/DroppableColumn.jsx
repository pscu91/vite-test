import React from "react";
import { useDroppable } from "@dnd-kit/core";

const DroppableColumn = ({ id, children, title }) => {
  const { setNodeRef, isOver } = useDroppable({ id });
  const backgroundColor = isOver ? "bg-purple-100" : "bg-slate-50";

  return (
    <div
      ref={setNodeRef}
      className={`flex min-h-[150px] w-1/3 w-full flex-col rounded-md border p-4 ${backgroundColor}`}
    >
      <h2 className="mb-4 text-xl font-bold text-slate-800">
        {title.toUpperCase()}
      </h2>
      {children}
    </div>
  );
};

export default DroppableColumn;
