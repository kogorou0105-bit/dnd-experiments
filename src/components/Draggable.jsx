import React from "react";
import { useDraggable } from "@dnd-kit/core";

function Draggable({ id }) {
  const { attributes, listeners, setNodeRef, transform } = useDraggable({ id });

  const style = {
    padding: "12px 20px",
    margin: "8px",
    background: "#3b82f6",
    color: "#fff",
    borderRadius: "8px",
    cursor: "grab",
    transform: transform
      ? `translate3d(${transform.x}px, ${transform.y}px, 0)`
      : undefined,
  };

  return (
    <div ref={setNodeRef} style={style} {...listeners} {...attributes}>
      {id}
    </div>
  );
}
export default Draggable;
