import { Footer } from "../Footer/Footer";
import { Header } from "../Header/Header";
import { Outlet } from "react-router-dom";
import { MainWrapper } from "./Layout.styled";
import MenuComp from "../MenuComp/MenuComp";

export const Layout = () => {

  return (
    <>
      <Header />
      <MainWrapper>
        <MenuComp/>
        <Outlet />
      </MainWrapper>
      <Footer />
    </>
  );
};
