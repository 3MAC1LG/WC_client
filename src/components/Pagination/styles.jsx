import { css } from '@emotion/react';
import styled from '@emotion/styled';

export const PaginationContainer = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  .prev {
    outline: none;
    background: none;
    border: none;
    cursor: pointer;
    width: 4rem;
    height: 4rem;
    border-radius: 1.5rem;
    &:disabled {
      cursor: not-allowed;
    }
    svg {
      width: 100%;
      height: 100%;
      font-size: 4rem;
    }
  }
  .next {
    outline: none;
    background: none;
    border: none;
    cursor: pointer;
    width: 4rem;
    border-radius: 1.5rem;
    height: 4rem;
    &:disabled {
      cursor: not-allowed;
    }
    svg {
      width: 100%;
      height: 100%;
      font-size: 4rem;
    }
  }
  .page {
    cursor: pointer;
    width: 4rem;
    height: 4rem;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 1.5rem;
    margin-left: 1rem;
    margin-right: 1rem;
    a {
      font-size: 2rem;
    }
  }
`;

export const PaginationContainerStyles = (theme) => css`
  .prev {
    &:hover {
      background: rgba(138, 133, 236, 0.15);
    }
    &:disabled {
      opacity: 0.25;
    }
    svg {
      color: ${theme.primary};
    }
  }
  .next {
    &:hover {
      background: rgba(138, 133, 236, 0.15);
    }
    &:disabled {
      opacity: 0.25;
    }
    svg {
      color: ${theme.primary};
    }
  }
  .page {
    a {
      color: ${theme.primary};
    }
    &:hover {
      background: rgba(138, 133, 236, 0.15);
    }
  }
`;
