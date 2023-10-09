import { Link, NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const HeaderWrapper = styled.header`
  display: flex;
  justify-content: space-between;
`;

export const HeaderMainLink = styled(Link)`
  color: #ffd700;
`;

export const HeaderLink = styled(NavLink)`
  font-weight: 500;
  color: #ffffff;
  text-decoration: none;

  border-bottom-left-radius: 15px;
  background-color: #505000;
  padding: 5px 10px;

  &:hover {
    box-shadow: 0 2px 4px rgba(255, 166, 0, 0.5);
  }
  &.active {
    background-color: #bcbc00;
    box-shadow: 0 5px 10px rgba(255, 205, 0, 0.5);
  }
`;

export const HeaderNav = styled.nav`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
`;
