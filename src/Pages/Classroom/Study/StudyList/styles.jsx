import { css } from '@emotion/react';
import styled from '@emotion/styled';

export const ListStyles = styled.div`
  .studyroom-list {
    margin-top: 2rem;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    column-gap: 3rem;
    .studyroom-item {
      height: 28rem;
      background-color: #fcfdfe;
      border-radius: 1rem;

      .image {
        margin: 1rem;
        height: 15rem;
        background-color: #f1f3f9;
        border-radius: 1rem;
      }

      .content {
        margin: 2rem;
        .studyroom-title {
          display: flex;
          justify-content: space-between;
          font-size: 2rem;

          .room-title {
            font-weight: bold;
          }
        }

        .room-user-info {
          display: flex;
          justify-content: space-between;
          font-size: 1.7rem;
          margin-top: 4.5rem;

          .owner {
            display: flex;
            align-items: center;
            div {
              margin-left: 0.5rem;
            }
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
