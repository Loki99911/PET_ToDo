import { StyledBtn } from "./CustomButton.styled";

export const CustomButton = ({
  children,
  onClick,
  type = "button",
}: {
  children: React.ReactNode;
  onClick?: () => void;
  type?: "button" | "submit" | "reset" | undefined;
}) => {
  return (
    <StyledBtn onClick={onClick} type={type}>
      {children}
    </StyledBtn>
  );
};
