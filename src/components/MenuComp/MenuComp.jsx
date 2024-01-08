import React, { useState } from "react";
import { CiMenuKebab } from "react-icons/ci";
import {
  MenuButton,
  MenuItem,
  MenuLink,
  MenuList,
  MenuNav,
  MenuWrapper,
} from "./MenuComp.styled";

export default function MenuComp() {
  const [menuShown, setMenuShown] = useState(false);

  const openMenu = () => {
    setMenuShown((prev) => !prev);
  };

  return (
    <MenuWrapper >
      <MenuNav $menuShown={menuShown}>
        <MenuList $menuShown={menuShown}>
          <MenuItem>
            <MenuLink to="/calendar">Calendar</MenuLink>
          </MenuItem>
          <MenuItem>
            <MenuLink to="/todo">Todos</MenuLink>
          </MenuItem>
          <MenuItem>
            <MenuLink to="/meetings">Meetings</MenuLink>
          </MenuItem>
          <MenuItem>
            <MenuLink to="/events">Events</MenuLink>
          </MenuItem>
          <MenuItem>
            <MenuLink to="/birthdays">Birthdays</MenuLink>
          </MenuItem>
        </MenuList>
      </MenuNav>
      <MenuButton onClick={openMenu}>
        <CiMenuKebab />
      </MenuButton>
    </MenuWrapper>
  );
}
