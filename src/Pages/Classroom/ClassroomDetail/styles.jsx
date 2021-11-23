import { css } from '@emotion/react';
import styled from '@emotion/styled';

export const ClassroomDetailContainer = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  border-radius: 1.2rem;

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
          font-weight: bold;
          padding-bottom: 0.5rem;
        }
        h1 {
          font-size: 2.4rem;
        }
      }
      .classroom-contents-grid {
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        row-gap: 2rem;

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
            div:first-child {
              padding-left: 2rem;
              background-color: #eceef6;
            }
          }
        }
      }
    }

    .classroom-studyroom {
      margin-top: 2rem;
      h1 {
        font-size: 2.4rem;
      }

      .search-create {
        display: flex;
        align-items: center;
        margin-top: 3rem;
        justify-content: space-between;

        .search {
          display: flex;
          align-items: center;
          border: 1px shadow #c1c1c1;
          border-radius: 3rem;
          width: 55rem;
          height: 5rem;
          box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;

          .glass {
            margin: 0 2rem;
            font-size: 2.6rem;
          }

          input {
            border: none;
            width: 55rem;
            height: 3rem;
            margin-right: 2rem;
            font-size: 1.8rem;
          }

          input::placeholder {
            font-size: 1.8rem;
            opacity: 0.5;
          }

          input:focus {
            outline: none;
          }
        }

        .create-button {
          display: flex;
          align-items: center;
          justify-content: center;
          border-radius: 3rem;
          width: 12rem;
          height: 5rem;
          font-size: 1.8rem;
        }
        .create-button:hover {
          opacity: 0.9;
          cursor: pointer;
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
  }
`;

export const StudyroomStyles = (theme) => css`
  .search {
    border: 1px shadow #c1c1c1;
    background-color: ${theme.search};

    .glass {
      color: ${theme.header};
    }
    input {
      background-color: ${theme.search};
    }

    input::placeholder {
      color: ${theme.header};
    }

    input:focus {
      outline: none;
    }
  }
  .create-button {
    background-color: ${theme.font_b};
    color: ${theme.font_m};
  }
`;
