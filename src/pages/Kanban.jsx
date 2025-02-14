import { motion } from "framer-motion";
import React, { useState } from "react";
import { DndContext, closestCenter, DragOverlay } from "@dnd-kit/core";
import {
  SortableContext,
  verticalListSortingStrategy,
  arrayMove,
} from "@dnd-kit/sortable";
import SortableItem from "../assets/SortableItem";
import DroppableColumn from "../assets/DroppableColumn";

const initialColumns = {
  todo: [
    { id: "task-1", content: "Task 1" },
    { id: "task-2", content: "Task 2" },
    { id: "task-3", content: "Task 3" },
  ],
  inprogress: [
    { id: "task-4", content: "Task 4" },
    { id: "task-5", content: "Task 5" },
  ],
  done: [{ id: "task-6", content: "Task 6" }],
};

const Kanban = () => {
  const [columns, setColumns] = useState(initialColumns);
  const [activeId, setActiveId] = useState(null);

  // 주어진 아이템 id가 속한 칼럼을 찾아 반환
  const findColumn = (id) => {
    // 만약 id가 칼럼의 key라면 바로 반환
    if (columns[id]) {
      return id;
    }
    // 그렇지 않으면, 기존 방식으로 아이템을 검색
    for (const columnId in columns) {
      if (columns[columnId].find((item) => item.id === id)) {
        return columnId;
      }
    }
    return null;
  };

  const handleDragStart = (event) => {
    setActiveId(event.active.id);
  };

  const handleDragEnd = (event) => {
    const { active, over } = event;
    if (!over) {
      setActiveId(null);
      return;
    }
    if (active.id === over.id) {
      setActiveId(null);
      return;
    }

    const sourceColumnId = findColumn(active.id);
    const destinationColumnId = findColumn(over.id);
    if (!sourceColumnId || !destinationColumnId) {
      setActiveId(null);
      return;
    }

    // 같은 칼럼 내 순서 변경
    if (sourceColumnId === destinationColumnId) {
      const items = columns[sourceColumnId];
      const oldIndex = items.findIndex((item) => item.id === active.id);
      const newIndex = items.findIndex((item) => item.id === over.id);
      const newItems = arrayMove(items, oldIndex, newIndex);
      setColumns({
        ...columns,
        [sourceColumnId]: newItems,
      });
    } else {
      // 칼럼 간 이동
      const sourceItems = columns[sourceColumnId];
      const destinationItems = columns[destinationColumnId];
      const movingItem = sourceItems.find((item) => item.id === active.id);
      if (!movingItem) {
        setActiveId(null);
        return;
      }
      const newSourceItems = sourceItems.filter(
        (item) => item.id !== active.id,
      );
      const newDestinationItems = [...destinationItems];
      const destinationIndex = destinationItems.findIndex(
        (item) => item.id === over.id,
      );
      if (destinationIndex === -1) {
        newDestinationItems.push(movingItem);
      } else {
        newDestinationItems.splice(destinationIndex, 0, movingItem);
      }
      setColumns({
        ...columns,
        [sourceColumnId]: newSourceItems,
        [destinationColumnId]: newDestinationItems,
      });
    }
    setActiveId(null);
  };

  const activeItem = activeId
    ? Object.values(columns)
        .flat()
        .find((item) => item.id === activeId)
    : null;

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.3 }}
    >
      <div className="my-8 text-6xl font-extrabold tracking-tight">
        <span className="select-none bg-gradient-to-r from-purple-400 to-blue-500 bg-clip-text text-transparent drop-shadow-lg">
          Kanban <br className="sm:hidden" />
          Board
        </span>
      </div>
      <DndContext
        collisionDetection={closestCenter}
        onDragStart={handleDragStart}
        onDragEnd={handleDragEnd}
      >
        <div className="flex flex-col gap-4 px-8 py-4 sm:flex-row">
          {Object.keys(columns).map((columnId) => (
            <DroppableColumn key={columnId} id={columnId} title={columnId}>
              <SortableContext
                items={columns[columnId].map((item) => item.id)}
                strategy={verticalListSortingStrategy}
              >
                {columns[columnId].length === 0 ? (
                  <div className="py-8 text-center text-slate-400">
                    Drop items here
                  </div>
                ) : (
                  columns[columnId].map((item) => (
                    <SortableItem key={item.id} id={item.id}>
                      <div className="mb-2 rounded bg-white p-4 font-semibold text-purple-600 shadow">
                        {item.content}
                      </div>
                    </SortableItem>
                  ))
                )}
              </SortableContext>
            </DroppableColumn>
          ))}
        </div>
        <DragOverlay>
          {activeItem ? (
            <div className="mb-2 rounded bg-white p-4 font-semibold text-purple-600 opacity-80 shadow">
              {activeItem.content}
            </div>
          ) : null}
        </DragOverlay>
      </DndContext>
    </motion.div>
  );
};

export default Kanban;
