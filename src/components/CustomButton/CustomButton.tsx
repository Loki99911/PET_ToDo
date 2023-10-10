import { StyledBtn } from "./CustomButton.styled";

export const OrangeButton = ({
  children,
  onClick,
}: {
  children: React.ReactNode;
  onClick: () => void;
}) => {
  return <StyledBtn onClick={onClick}>{children}</StyledBtn>;
};
