import styled from '@emotion/styled';
import { css } from '@emotion/react';

export const MyPageClassroomsContainer = styled.div`
  margin-bottom: 5rem;
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  .title {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    h1 {
      font-size: 2.4rem;
    }
  }
  .lottie {
    width: 85%;
    margin-top: 4rem;
  }

  p {
    margin-top: 2rem;
    margin-bottom: 6rem;
    font-size: 1.75rem;
  }

  button {
    border: none;
    background: none;
    outline: none;

    cursor: pointer;
    border-radius: 0.7rem;
    padding: 2rem 12rem;
    font-size: 2.25rem;
    font-weight: bold;
    &:hover {
      opacity: 0.9;
    }
  }

  .mypage-grid {
    margin-top: 6rem;
    display: grid;
    flex: 1;
    grid-template-columns: repeat(2, 1fr);
    column-gap: 3rem;
    row-gap: 6rem;
  }
`;

export const MyPagePtagStyles = (theme) => css`
  color: ${theme.font_l};
  .title {
    h1 {
      color: ${theme.font_s};
    }
  }

  button {
    background: ${theme.active};
    color: ${theme.font_a};
  }
`;
