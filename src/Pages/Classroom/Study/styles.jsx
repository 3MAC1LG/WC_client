import { css } from '@emotion/react';
import styled from '@emotion/styled';

export const StudyroomContainer = styled.div`
  margin-bottom: 8rem;
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

    .studyroom {
      margin-top: 10rem;
      .open-studyroom,
      .private-studyroom {
        margin-top: 10rem;
        .open-title {
          display: flex;
          font-size: 2.4rem;
          color: #8a85ec;
          .title-text {
            margin-left: 0.5rem;
          }
        }
      }

      .private-studyroom {
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

  .open-title {
    .unlock-icon,
    .lock-icon,
    .title-text {
      color: ${theme.font_b};
    }
  }
`;
