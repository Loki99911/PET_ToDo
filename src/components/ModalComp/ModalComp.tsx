import { createPortal } from "react-dom";
import { ModalBackdrop, ModalCard } from "./ModalComp.styled";
import { ITodoCard } from "../../types/ITodo";
import { useState } from "react";
import { nanoid } from "nanoid";
import { CustomButton } from "../CustomButton/CustomButton";

interface IModalCompProps {
  closeModal: () => void;
  todoList: ITodoCard[];
}

const ModalComp: React.FunctionComponent<IModalCompProps> = ({
  closeModal,
  todoList,
}) => {
  const [title, setTitle] = useState("");
  const [task, setTask] = useState("");

  const modalRoot = document.getElementById("modal-root");

  const backdropClick: React.MouseEventHandler<HTMLDivElement> = (e) => {
    if (e.currentTarget === e.target) {
      closeModal();
    }
  };

  const addToLocalStor = () => {
    const newTodo = { id: nanoid(), title, task, status: "await" };
    const allTodos = [...todoList, newTodo];

    localStorage.setItem("todos", JSON.stringify(allTodos));
  };

  return createPortal(
    <ModalBackdrop onClick={backdropClick}>
      <ModalCard>
        <form onSubmit={addToLocalStor}>
          <label>
            Title:
            <input
              type="text"
              onChange={(e) => setTitle(e.target.value)}
              value={title}
            />
          </label>
          <label>
            Discription:
            <textarea
              cols={30}
              rows={10}
              value={task}
              onChange={(e) => setTask(e.target.value)}
            />
          </label>
          <CustomButton type="submit">Create</CustomButton>
        </form>
      </ModalCard>
    </ModalBackdrop>,
    modalRoot!
  );
};

export default ModalComp;
