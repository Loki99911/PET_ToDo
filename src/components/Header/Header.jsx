import { HeaderLink, HeaderMainLink, HeaderNav, HeaderWrapper } from './Header.styled';

export const Header = () => {
  return (
    <>
      <HeaderWrapper>
        <HeaderMainLink to="/">
          <h1>Mykyta Kresik</h1>
        </HeaderMainLink>
        <HeaderNav>
          <HeaderLink to="/experience">Experience</HeaderLink>
          <HeaderLink to="/todo">My Work Example</HeaderLink>
          <HeaderLink to="/contacts">Contacts</HeaderLink>
        </HeaderNav>
      </HeaderWrapper>
    </>
  );
};
