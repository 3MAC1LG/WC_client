/** @jsxImportSource @emotion/react */
import { useTheme } from '@emotion/react';
import React from 'react';
import { NavLink } from 'react-router-dom';
import { MenuContainer, MenuContainerStyles } from './styles';

const Menu = () => {
  const theme = useTheme();
  return (
    <MenuContainer css={MenuContainerStyles(theme)}>
      <ul>
        <li>
          <NavLink activeClassName="active" to="/mypage">
            내 강의 목록
          </NavLink>
        </li>
        <li>
          <NavLink activeClassName="active" to="/account">
            계정관리
          </NavLink>
        </li>
        <li>
          <a>로그아웃</a>
        </li>
      </ul>
    </MenuContainer>
  );
};

export default Menu;
