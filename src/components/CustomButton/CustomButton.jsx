import { StyledBtn } from "./CustomButton.styled";

export const OrangeButton = ({ children, onClick }) => {
  return <StyledBtn onClick={onClick}>{children}</StyledBtn>;
};
