import { useEffect, useState } from "react";
import { CustomButton } from "../../components/CustomButton/CustomButton";
import ModalComp from "../../components/ModalComp/ModalComp";
import {
  TodoPageBtnWrapper,
  TodoPageListWrapper,
  TodoPageWrapper,
} from "./TodoPage.styled";
import { ITodoCard } from "../../types/ITodo";
import TodoCard from "../../components/TodoCard/TodoCard";
import { BsPlusCircle } from "react-icons/bs";

export const TodoPage = () => {
  const [createModalOpen, setCreateModalOpen] = useState(false);
  const [todoList, setTodoList] = useState<ITodoCard[]>([]);
  const toggleModal = () => {
    setCreateModalOpen((prev) => !prev);
  };

  useEffect(() => {
    const currentLocal = localStorage.getItem("todos");
    if (currentLocal) {
      const localArray = JSON.parse(currentLocal);
      setTodoList(localArray);
    }
  }, []);

  return (
    <TodoPageWrapper>
      <TodoPageBtnWrapper>
        <CustomButton onClick={toggleModal}>
          <BsPlusCircle />
        </CustomButton>
      </TodoPageBtnWrapper>
      <TodoPageListWrapper>
        {todoList.map((el) => (
          <TodoCard
            key={el.id}
            title={el.title}
            task={el.task}
            status={el.status}
          />
        ))}
      </TodoPageListWrapper>
      {createModalOpen && (
        <ModalComp closeModal={toggleModal} todoList={todoList} />
      )}
      TodoPage
    </TodoPageWrapper>
  );
};
