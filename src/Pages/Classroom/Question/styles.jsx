import { css } from '@emotion/react';
import styled from '@emotion/styled';

export const QuestionStyles = styled.div`
  margin-top: 2rem;
  .question-header {
    display: flex;
    justify-content: space-between;
    align-items: center;

    h1 {
      font-size: 2.4rem;
    }
    .question-header-button {
      display: flex;
      justify-content: center;
      align-items: center;
      width: 15rem;
      height: 5rem;
      border-radius: 3rem;
      font-size: 2rem;
    }

    .question-header-button:hover {
      opacity: 0.9;
      cursor: pointer;
    }
  }
  .question-list {
    margin-top: 5rem;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    column-gap: 3rem;
  }
`;

export const QuestionDark = (theme) => css`
  .question-header-button {
    background-color: ${theme.font_b};
    color: ${theme.font_m};
  }
`;
