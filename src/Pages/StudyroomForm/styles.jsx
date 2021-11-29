import { css } from '@emotion/react';
import styled from '@emotion/styled';

export const StudyFormContainer = styled.div`
  .form-layout {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin-top: 6rem;

    .create-title {
      font-size: 1.6rem;
      font-weight: bold;
    }

    .create-form {
      width: 52.5rem;
      margin-top: 3rem;
      border-radius: 2rem;

      .form-padding {
        hr {
          background-color: #f9fbfe;
          position: relative;
          right: 2rem;
          width: 47rem;
        }
        padding: 2rem;
        .form-title {
          display: flex;
          justify-content: center;
          align-items: center;
          font-size: 1.8rem;
          margin-bottom: 2rem;
          color: #292a2d;
        }
        .form-content {
          padding: 2rem;
          padding-top: 2.5rem;
          .study-name {
            div {
              font-size: 1.6rem;
              color: #292a2d;
            }
            input {
              width: 100%;
              height: 3rem;
              margin-top: 2rem;
              border: none;
              background-color: #fcfdfe;
              border-radius: 1rem;
              padding: 2rem;
              font-size: 1.4rem;
            }
            input::placeholder {
              font-size: 1.4rem;
            }
            input:focus {
              outline: none;
            }
          }

          .studyroom-type {
            margin-top: 2.5rem;

            .studyroom-type-title {
              font-size: 1.6rem;
              color: #292a2d;
            }
            .type-check {
              display: flex;
              justify-content: space-around;
              font-size: 1.4rem;
              margin-top: 1.5rem;
              color: #292a2d;

              input {
                position: relative;
                top: 0.15rem;
                margin-right: 1.5rem;
                font-size: 1.4rem;
              }
            }
          }

          .password {
            margin-top: 2.5rem;
            div {
              font-size: 1.6rem;
              color: #292a2d;
            }
            input {
              width: 100%;
              height: 3rem;
              margin-top: 2rem;
              border: none;
              background-color: #fcfdfe;
              border-radius: 1rem;
              font-size: 1.4rem;
              padding: 2rem;
            }
            input::placeholder {
              font-size: 1.4rem;
            }
            input:focus {
              outline: none;
            }
          }

          .studyroom-image {
            margin-top: 2.5rem;
            font-size: 1.6rem;
            color: #292a2d;

            .image {
              width: 25rem;
              height: 15rem;
              background-color: #eaeaea;
              margin: 0 auto;
              margin-top: 2rem;
            }
          }

          .form-button {
            display: flex;
            justify-content: space-between;
            margin-top: 4rem;
            div {
              border-radius: 3rem;
              width: 13rem;
              height: 4rem;
              font-size: 1.4rem;
              color: #fcfdfe;
            }
            .delete {
              display: flex;
              justify-content: center;
              align-items: center;
              background-color: #fed595;
            }
            .delete:hover {
              opacity: 0.9;
              cursor: pointer;
            }
            .next {
              display: flex;
              justify-content: center;
              align-items: center;
              background-color: #8a85ec;
            }
            .next:hover {
              opacity: 0.9;
              cursor: pointer;
            }
          }
        }
      }
    }
  }
`;

export const FormDark = (theme) => css`
  .form-layout {
    .create-title {
      color: ${theme.font_l};
      span {
        color: ${theme.font_y};
      }
    }

    .create-form {
      background-color: ${theme.border};
      .form-padding {
        hr {
        }
        padding: 2rem;
        .form-title {
        }
        .form-content {
          .form-button {
            div {
            }
            .delete {
              background-color: ${theme.btn_y};
            }
            .next {
              background-color: ${theme.font_b};
            }
          }
        }
      }
    }
  }
`;
