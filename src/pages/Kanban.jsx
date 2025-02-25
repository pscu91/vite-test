import React, { useState } from "react";
import { DndContext, closestCenter, DragOverlay } from "@dnd-kit/core";
import {
  SortableContext,
  verticalListSortingStrategy,
  arrayMove,
} from "@dnd-kit/sortable";
import SortableItem from "../assets/SortableItem";
import DroppableColumn from "../assets/DroppableColumn";
import PageTitle from "../assets/PageTitle";

const initialColumns = {
  todo: [{ id: "task-1", content: "Task 1" }],
  inprogress: [{ id: "task-2", content: "Task 2" }],
  done: [{ id: "task-3", content: "Task 3" }],
};

const Kanban = () => {
  const [columns, setColumns] = useState(initialColumns);
  const [activeId, setActiveId] = useState(null);

  const findColumn = (id) => {
    return Object.keys(columns).find((columnId) =>
      columns[columnId].some((item) => item.id === id),
    );
  };

  const handleDragEnd = (event) => {
    const { active, over } = event;
    if (!over) return;

    const activeId = active.id;
    const overId = over.id;

    const activeColumnId = findColumn(activeId);
    const overColumnId = findColumn(overId) || overId;

    if (activeColumnId !== overColumnId) {
      // 다른 칼럼으로 이동
      const movingItem = columns[activeColumnId].find(
        (item) => item.id === activeId,
      );

      setColumns({
        ...columns,
        [activeColumnId]: columns[activeColumnId].filter(
          (item) => item.id !== activeId,
        ),
        [overColumnId]: [...columns[overColumnId], movingItem],
      });
    } else {
      // 같은 칼럼 내에서 이동
      const items = columns[activeColumnId];
      const oldIndex = items.findIndex((item) => item.id === activeId);
      const newIndex = items.findIndex((item) => item.id === overId);

      setColumns({
        ...columns,
        [activeColumnId]: arrayMove(items, oldIndex, newIndex),
      });
    }

    setActiveId(null);
  };

  const addTask = (columnId) => {
    const newTask = {
      id: `task-${Date.now()}`, // 유니크한 ID 생성
      content: `New Task #${columns[columnId].length + 1}`,
    };

    setColumns({
      ...columns,
      [columnId]: [...columns[columnId], newTask],
    });
  };

  return (
    <div>
      <PageTitle>Kanban Board</PageTitle>
      <DndContext
        collisionDetection={closestCenter}
        onDragStart={(event) => setActiveId(event.active.id)}
        onDragEnd={handleDragEnd}
      >
        <div className="flex flex-col gap-4 px-8 py-4 sm:flex-row">
          {Object.entries(columns).map(([columnId, items]) => (
            <DroppableColumn key={columnId} id={columnId} title={columnId}>
              <button
                onClick={() => addTask(columnId)}
                className="mt-2 w-full rounded bg-purple-500 px-4 py-2 text-white transition-colors hover:bg-purple-600"
              >
                + New Task
              </button>
              <SortableContext
                items={items.map((item) => item.id)}
                strategy={verticalListSortingStrategy}
              >
                {items.map((item) => (
                  <SortableItem key={item.id} id={item.id}>
                    <div className="mb-2 rounded bg-white p-4 font-semibold text-purple-600 shadow">
                      {item.content}
                    </div>
                  </SortableItem>
                ))}
              </SortableContext>
            </DroppableColumn>
          ))}
        </div>
        <DragOverlay>
          {activeId && (
            <div className="mb-2 rounded bg-white p-4 font-semibold text-purple-600 opacity-80 shadow">
              {
                columns[findColumn(activeId)].find(
                  (item) => item.id === activeId,
                )?.content
              }
            </div>
          )}
        </DragOverlay>
      </DndContext>
    </div>
  );
};

export default Kanban;
