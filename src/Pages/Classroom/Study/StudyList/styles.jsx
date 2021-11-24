import { css } from '@emotion/react';
import styled from '@emotion/styled';

export const ListStyles = styled.div`
  .studyroom-list {
    margin-top: 2rem;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-gap: 2rem;
    @media (max-width: 1024px) {
      grid-template-columns: repeat(2, 1fr);
    }
    .studyroom-item {
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      background-color: #fcfdfe;
      border-radius: 1rem;

      .image {
        margin: 1rem;
        height: 15rem;
        background-color: #f1f3f9;
        border-radius: 1rem;
      }

      .content {
        display: flex;
        flex-direction: column;
        margin: 2rem;

        .studyroom-title {
          display: flex;
          justify-content: space-between;

          font-size: 1.8rem;
          margin-bottom: 3rem;
        }
        .room-user-info {
          display: flex;
          justify-content: space-between;
          align-items: center;
          font-size: 1.6rem;

          .owner {
            display: flex;
            justify-content: space-between;
          }
        }
      }
    }
  }
`;

export const ListStyleDark = (theme) => css`
  .studyroom-list {
    .studyroom-item {
      background-color: ${theme.defaultBgc};
      color: ${theme.font_u};
    }
  }
`;
