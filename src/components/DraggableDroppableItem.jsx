import { DndContext, useDraggable, useDroppable } from "@dnd-kit/core";
import { useCallback, useState } from "react";
import { CSS } from "@dnd-kit/utilities";
import "./Task/Task.css";
export default function DraggableDroppableItem({ id, title }) {
  const {
    attributes,
    listeners,
    setNodeRef: setDragRef,
    transform,
  } = useDraggable({ id });

  const { setNodeRef: setDropRef, isOver } = useDroppable({ id });

  // 合并 draggable 和 droppable 的 ref
  const setRefs = useCallback(
    (node) => {
      setDragRef(node);
      setDropRef(node);
    },
    [setDragRef, setDropRef]
  );

  const style = {
    transform: CSS.Transform.toString(transform),
  };

  return (
    <div
      ref={setRefs}
      style={style}
      {...listeners}
      {...attributes}
      className="task"
    >
      <input type="checkbox" className="checkbox" />
      {title}
    </div>
  );
}
