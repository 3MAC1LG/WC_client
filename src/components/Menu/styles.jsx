import styled from '@emotion/styled';
import { css } from '@emotion/react';

export const MenuContainer = styled.div`
  ul {
    display: flex;
    flex-direction: column;
    padding-left: 0;
    li {
      width: 100%;
      a {
        display: flex;
        align-items: center;
        justify-content: center;
        padding: 2rem 3rem;
        margin-bottom: 2rem;
        background: black;
        border-radius: 0.7rem;
        cursor: pointer;
        font-size: 1.5rem;
      }
    }
  }
`;

export const MenuContainerStyles = (theme) => css`
  ul {
    li {
      a {
        color: ${theme.font_e};
        background: ${theme.container};
        border: 1px solid ${theme.border};
        &.active {
          color: ${theme.font_a};
          background: ${theme.header};
          border: 1px solid ${theme.header};
        }
      }
    }
  }
`;
