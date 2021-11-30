import { css } from '@emotion/react';
import styled from '@emotion/styled';

export const ClassroomDetailContainer = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;

  .classroom-padding {
    padding: 3rem;
    .classroom-contents {
      padding-bottom: 8rem;
      .classroom-contents-title {
        display: flex;
        flex-direction: column;
        p {
          margin: 0;
          font-size: 1.9rem;
          padding-bottom: 0.5rem;
        }
        h1 {
          font-size: 2.4rem;
        }
      }
      .classroom-contents-grid {
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        column-gap: 2rem;
        @media screen and (max-width: 768px) {
          grid-template-columns: repeat(1, 1fr);
          column-gap: 2rem;
        }

        .video-desc {
          .classroom-video {
            height: 30rem;
            margin-bottom: 3rem;
          }

          .lecture-info {
            div {
              font-size: 2rem;
              margin-bottom: 1.5rem;
            }
          }
        }
        .classroom-section {
          margin-left: 3rem;

          .per-section {
            div {
              display: flex;
              align-items: center;
              padding-left: 4rem;
              height: 5rem;
              font-size: 2rem;
              background-color: #f6f7fc;
              border-bottom: 1px solid #eaeaea;
            }
            div:first-of-type {
              padding-left: 2rem;
              background-color: #eceef6;
            }
          }
        }
      }
    }
    .classroom-studyroom {
      margin-bottom: 3rem;
      .studyroom-title {
        display: flex;
        align-items: center;
        justify-content: space-between;
        margin-top: 3rem;
        h1 {
          font-size: 2.4rem;
        }
      }
      .studyroom-common {
        margin-top: 3rem;
        .studyroom-common-title {
          display: flex;
          align-items: center;
          justify-content: flex-start;
          svg {
            font-size: 2.3rem;
          }
          h1 {
            margin-left: 0.7rem;
            font-size: 1.9rem;
          }
        }
        .studyroom-grid {
          margin-top: 1.5rem;
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 1.5rem;
          @media screen and (max-width: 768px) {
            grid-template-columns: repeat(2, 1fr);
          }
          .item-none {
            padding: 2rem 0;
            font-size: 1.5rem;
            font-weight: bold;
          }
        }
      }
    }
  }
`;

export const ClassroomDetailContainerStyles = (theme) => css`
  background: ${theme.border};
  .classroom-padding {
    padding: 3rem;
    .classroom-contents {
      .classroom-contents-title {
        color: #080305;
        margin-bottom: 3rem;
        p {
        }
        h1 {
        }
      }
      .classroom-contents-grid {
        .classroom-video {
          background: #eaeaea;
        }
        .classroom-section {
        }
      }
    }
    .classroom-studyroom {
      .studyroom-title {
        h1 {
        }
      }
      .studyroom-common {
        .studyroom-common-title {
          color: ${theme.font_b};
          svg {
          }
          h1 {
          }
        }
      }
    }
  }
`;

export const Split = styled.hr`
  border-color: #c1c1c1;
`;
