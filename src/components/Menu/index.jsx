/** @jsxImportSource @emotion/react */
import { useTheme } from '@emotion/react';
import React from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { MenuContainer, MenuContainerStyles } from './styles';

const Menu = () => {
  const theme = useTheme();
  const { pathname } = useLocation();
  return !pathname.includes('/lecture') ? (
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
  ) : (
    <MenuContainer css={MenuContainerStyles(theme)}>
      <ul>
        <li>
          <NavLink activeClassName="active" to="/lecture/:all?page=1">
            모두보기
          </NavLink>
        </li>
        <li>
          <NavLink activeClassName="active" to="/lecture/:프론트엔드?page=1">
            프론트엔드
          </NavLink>
        </li>
        <li>
          <NavLink activeClassName="active" to="/lecture/:백엔드?page=1">
            백엔드
          </NavLink>
        </li>
        <li>
          <NavLink activeClassName="active" to="/lecture/:게임?page=1">
            게임 개발
          </NavLink>
        </li>
        <li>
          <NavLink activeClassName="active" to="/lecture/:앱?page=1">
            앱 개발
          </NavLink>
        </li>
      </ul>
    </MenuContainer>
  );
};

export default Menu;
