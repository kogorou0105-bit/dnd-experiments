import React from "react";
import { useDroppable } from "@dnd-kit/core";
import Draggable from "./Draggable";
export function Droppable({ id, children }) {
  const { setNodeRef, isOver } = useDroppable({ id });

  const style = {
    flex: 1,
    minHeight: "300px",
    margin: "0 10px",
    padding: "10px",
    border: "2px dashed #888",
    borderRadius: "12px",
    background: isOver ? "#dbeafe" : "#f9fafb",
    transition: "0.2s background ease",
  };

  return (
    <div ref={setNodeRef} style={style}>
      <h3 style={{ textAlign: "center" }}>{id}</h3>
      {children}
    </div>
  );
}
