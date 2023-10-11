import { StyledBtn } from "./CustomButton.styled";

export const CustomButton = ({
  children,
  onClick,
}: {
  children: React.ReactNode;
  onClick: () => void;
  }) => {
  // const asas = () => {
  //   console.log("fsfsdfsd");
    
  // }
  return <StyledBtn onClick={onClick}>{children}</StyledBtn>;
};
