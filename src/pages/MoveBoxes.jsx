import React from "react";
import { useState } from "react";
import { Droppable } from "../components/Droppable";
import Draggable from "../components/Draggable";
import { DndContext } from "@dnd-kit/core";

const MoveBoxes = () => {
  // 管理左右两栏的元素
  const [items, setItems] = useState({
    left: ["A", "B", "C"],
    right: ["D"],
  });

  function handleDragEnd(event) {
    const { active, over } = event;
    if (!over) return; // 没有拖进目标就不处理

    const from = findContainer(active.id);
    const to = over.id;

    if (from && to && from !== to) {
      setItems((prev) => {
        const newFrom = prev[from].filter((item) => item !== active.id);
        const newTo = [...prev[to], active.id];
        return { ...prev, [from]: newFrom, [to]: newTo };
      });
    }
  }

  // 辅助：找到当前 item 属于哪个容器
  function findContainer(id) {
    return Object.keys(items).find((key) => items[key].includes(id));
  }
  return (
    <div className="container1">
      <DndContext onDragEnd={handleDragEnd}>
        <div style={{ display: "flex", padding: "20px" }}>
          <Droppable id="left">
            {items.left.map((id) => (
              <Draggable key={id} id={id} />
            ))}
          </Droppable>

          <Droppable id="right">
            {items.right.map((id) => (
              <Draggable key={id} id={id} />
            ))}
          </Droppable>
        </div>
      </DndContext>
    </div>
  );
};

export default MoveBoxes;
