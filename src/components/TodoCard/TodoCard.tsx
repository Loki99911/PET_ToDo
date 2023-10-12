import * as React from "react";

interface ITodoCardProps {
  title: string;
  task: string;
  status: string;
}

const TodoCard: React.FC<ITodoCardProps> = ({ title, task, status }) => {
  return (
    <div>
      <p>{title}</p>
      <p>{task}</p>
      <p>{status}</p>
    </div>
  );
};

export default TodoCard;
