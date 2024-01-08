import React from "react";
import { HeaderMainLink, HeaderWrapper } from "./Header.styled";

export const Header = () => {
  return (
    <>
      <HeaderWrapper>
        <HeaderMainLink to="/">
          <h1>Planer</h1>
        </HeaderMainLink>
      </HeaderWrapper>
    </>
  );
};
