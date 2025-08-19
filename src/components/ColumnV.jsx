import DraggableDroppableItem from "./DraggableDroppableItem";
import "./Column/Column.css";

export const ColumnV = ({ tasks }) => {
  return (
    <div className="column">
      {tasks.map((task) => (
        <DraggableDroppableItem key={task.id} id={task.id} title={task.title} />
      ))}
    </div>
  );
};
