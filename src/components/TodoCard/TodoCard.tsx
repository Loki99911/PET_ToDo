import * as React from "react";
import { CardDescription, CardTitle, CardWrapper } from "./TodoCard.styled";
import { CustomButton } from "../CustomButton/CustomButton";
import { BsFillTrash3Fill } from "react-icons/bs";

interface ITodoCardProps {
  title: string;
  task: string;
  status: string;
}

const TodoCard: React.FC<ITodoCardProps> = ({ title, task, status }) => {
  const deleteTodo = () => {};
  return (
    <CardWrapper>
      <CardTitle>{title}</CardTitle>
      <CardDescription>{task}</CardDescription>
      <p>{status}</p>
      <CustomButton onClick={deleteTodo}>
        <BsFillTrash3Fill />
      </CustomButton>
    </CardWrapper>
  );
};

export default TodoCard;
