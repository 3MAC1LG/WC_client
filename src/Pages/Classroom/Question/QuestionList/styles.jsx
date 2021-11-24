import { css } from '@emotion/react';
import styled from '@emotion/styled';

export const QuestionListStyles = styled.div`
  .question-box {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    height: 23rem;
    background-color: #fcfdfe;
    border-radius: 1rem;
    padding: 2rem;

    .question-info {
      display: flex;
      justify-content: space-between;
      align-items: center;
      font-size: 2rem;
    }

    .question-desc {
      font-size: 1.6rem;
      font-weight: bold;
    }

    .question-response {
      display: flex;
      justify-content: space-between;
      align-items: center;

      .question-response-like {
        display: flex;
        align-items: center;
        font-size: 1.6rem;
        .like-icon {
          margin-right: 1rem;
          font-size: 2.2rem;
        }
      }

      .question-response-check {
        border: none;
        display: flex;
        justify-content: center;
        align-items: center;
        border-radius: 3rem;
        font-size: 1.6rem;
        width: 12rem;
        height: 5rem;
      }
    }
  }
`;

export const QuestionListDark = (theme) => css`
  .question-box {
    background-color: ${theme.defaultBgc};
    color: ${theme.font_u};

    .question-response-like {
      .like-icon {
        color: ${theme.active};
      }
    }
    .question-response-check {
      background-color: ${theme.active};
      color: ${theme.font_a};
    }
  }
`;
