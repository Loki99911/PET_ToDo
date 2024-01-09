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
import { listOfPages } from "../../constants/listOfPages";


export default function MenuComp() {
  const [menuShown, setMenuShown] = useState(false);

  const openMenu = () => {
    setMenuShown((prev) => !prev);
  };

  return (
    <MenuWrapper>
      <MenuNav $menuShown={menuShown}>
        <MenuList $menuShown={menuShown}>
          {listOfPages.map((el) => (
            <MenuItem key={el}>
              <MenuLink to={`/${el}`}>{el.toUpperCase()}</MenuLink>
            </MenuItem>
          ))}
        </MenuList>
      </MenuNav>
      <MenuButton onClick={openMenu}>
        <CiMenuKebab />
      </MenuButton>
    </MenuWrapper>
  );
}
