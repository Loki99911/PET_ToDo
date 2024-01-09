import { NavLink } from "react-router-dom";
import styled from "styled-components";

export const MenuWrapper = styled.aside`
  position: relative;
  /* border: 1px solid red; */
  /* outline: 3px solid black; */
  border-top-right-radius: 5px;
  border-bottom-right-radius: 5px;
  height: 100%;
  /* min-width: 150px; */
  background-color: #d4d4d4;
`;

export const MenuNav = styled.nav<{$menuShown: boolean}>`
  display: flex;
  flex-direction: column;
  height: 100%;
  width: ${(props) => (!props.$menuShown ? "0px" : "150px")};
  transition: width 400ms ease;
  overflow: hidden;
`;

export const MenuList = styled.ul<{ $menuShown: boolean }>`
  position: absolute;
  gap: 10px;
  left: ${(props) => (props.$menuShown ? "0px" : "-150px")};
  transition: left 400ms ease;
`;

export const MenuItem = styled.li`
  padding: 5px 10px;
`;

export const MenuLink = styled(NavLink)`
  font-weight: 500;
  color: #ffffff;
  text-decoration: none;

  background-color: #505000;

  &:hover {
    box-shadow: 0 2px 4px rgba(255, 166, 0, 0.5);
  }
  &.active {
    background-color: #bcbc00;
    box-shadow: 0 5px 10px rgba(255, 205, 0, 0.5);
  }
`;

export const MenuButton = styled.button`
  position: absolute;
  transform: translateY(-50%);
  top: 50%;
  right: -16px;
  padding: 10px 0px;
  border: none;
  border-top-right-radius: 5px;
  border-bottom-right-radius: 5px;
  background-color: gray;
`;
