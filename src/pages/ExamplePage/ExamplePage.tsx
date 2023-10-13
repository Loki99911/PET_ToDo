import { useEffect, useState } from "react";
import { CustomButton } from "../../components/CustomButton/CustomButton";
import ModalComp from "../../components/ModalComp/ModalComp";
import {
  ExamplePageBtnWrapper,
  ExamplePageListWrapper,
  ExamplePageWrapper,
} from "./ExamplePage.styled";
import { ITodoCard } from "../../types/ITodo";
import TodoCard from "../../components/TodoCard/TodoCard";
import { BsPlusCircle } from "react-icons/bs";

export const ExamplePage = () => {
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
    <ExamplePageWrapper>
      <ExamplePageBtnWrapper>
        <CustomButton onClick={toggleModal}><BsPlusCircle/></CustomButton>
      </ExamplePageBtnWrapper>
      <ExamplePageListWrapper>
        {todoList.map((el) => (
          <TodoCard
            key={el.id}
            title={el.title}
            task={el.task}
            status={el.status}
          />
        ))}
      </ExamplePageListWrapper>
      {createModalOpen && (
        <ModalComp closeModal={toggleModal} todoList={todoList} />
      )}
      ExamplePage
    </ExamplePageWrapper>
  );
};
