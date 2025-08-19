import { useState } from "react";
import { DndContext, closestCorners } from "@dnd-kit/core";

import "./Task.css";
import { Input } from "../components/Input/Input";
import { ColumnV } from "../components/ColumnV";
export default function TaskV() {
  const [tasks, setTasks] = useState([
    { id: 1, title: "Add tests to homepage" },
    { id: 2, title: "Fix styling in about section" },
    { id: 3, title: "Learn how to center a div" },
  ]);

  const addTask = (title) => {
    setTasks((tasks) => [...tasks, { id: tasks.length + 1, title }]);
  };

  function handleDragEnd(event) {
    const { active, over } = event;

    if (!over || active.id === over.id) return;

    setTasks((prev) => {
      const oldIndex = prev.findIndex((item) => item.id === active.id);
      const newIndex = prev.findIndex((item) => item.id === over.id);

      const updated = [...prev];
      const [moved] = updated.splice(oldIndex, 1);
      updated.splice(newIndex, 0, moved);

      return updated;
    });
  }
  return (
    <div className="tasks">
      <h1>My TaskVillia ✅</h1>
      <Input onSubmit={addTask} />
      <DndContext onDragEnd={handleDragEnd}>
        <ColumnV id="toDo" tasks={tasks} />
      </DndContext>
    </div>
  );
}
