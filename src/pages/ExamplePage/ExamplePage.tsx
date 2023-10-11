import { useState } from "react";
import { CustomButton } from "../../components/CustomButton/CustomButton";
import ModalComp from "../../components/ModalComp/ModalComp";

export const ExamplePage = () => {
  const [createModalOpen, setCreateModalOpen] = useState(false);

  const toggleModal = () => {
    setCreateModalOpen((prev) => !prev);    
  };
  return (
    <>
      <CustomButton onClick={toggleModal}>add card</CustomButton>
      {createModalOpen && <ModalComp closeModal={toggleModal}/>}
      ExamplePage
    </>
  );
};
