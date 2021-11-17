import styled from '@emotion/styled';
import { css } from '@emotion/react';

export const HeaderContainer = styled.div`
  width: 100%;
  position: fixed;
  z-index: 999;

  .header {
    width: 100%;
    height: 10rem;
    display: flex;
    align-items: center;
    .header-left {
      flex: 0.5;
      h1 {
        cursor: pointer;
        font-size: 2.65rem;
        color: #fff;
      }
    }
    .header-right {
      flex: 0.5;
      ul {
        display: flex;
        align-items: center;
        justify-content: flex-end;
        font-size: 1.5rem;
        li {
          padding-left: 15rem;
          a {
            color: #fff;
          }
          button {
            outline: none;
            border: none;
            background: none;
            cursor: pointer;
            font-family: 'Gmaket Sans', sans-serif;
            font-size: 1.5rem;
            color: #fff;
          }
        }
      }
    }
  }
`;

export const HeaderContainerStyles = (theme) => css`
  background: ${theme.header};
  .header {
    .header-left {
      h1 {
      }
    }
    .header-right {
    }
  }
`;

export const Space = styled.div`
  height: 10rem;
`;
