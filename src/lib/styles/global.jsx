import React from 'react';
import { css, Global, useTheme } from '@emotion/react';
import { useLocation } from 'react-router-dom';

const styles = (theme, pt) => css`
  @import url('/assets/font/font.css');
  html,
  body {
    font-size: 62.5%;
    font-family: 'Gmaket Sans', sans-serif;
    background: ${pt ? '#F4F4F4' : theme.defaultBgc};
    @media screen and (max-width: 1280px) {
      font-size: 56.25%;
    }
    @media screen and (max-width: 1024px) {
      font-size: 50%;
    }
    @media screen and (max-width: 768px) {
      font-size: 37.5%;
    }
    @media screen and (max-width: 480px) {
      font-size: 25%;
    }
    @media screen and (max-width: 480px) {
      font-size: 20%;
    }
  }

  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  a {
    text-decoration: none;
  }

  ul,
  li {
    padding: 0;
    list-style: none;
  }
`;

const GlobalStyles = () => {
  const { pathname } = useLocation();
  const pt = pathname.includes('studyroom/:') ? true : false;
  const theme = useTheme();
  return <Global styles={styles(theme, pt)} />;
};

export default GlobalStyles;
