import * as React from "react";
import { createPortal } from "react-dom";
import { ModalBackdrop, ModalCard } from "./ModalComp.styled";

interface IModalCompProps {
  closeModal:()=>void;
}

const ModalComp: React.FunctionComponent<IModalCompProps> = (props) => {
  const modalRoot = document.getElementById("modal-root");
  return createPortal(
    <ModalBackdrop onClick={props.closeModal}>
      <ModalCard>
        fdsfsdfsdfds
      </ModalCard>
    </ModalBackdrop>,
    modalRoot!
  );
};

export default ModalComp;
