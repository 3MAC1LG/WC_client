import styled from '@emotion/styled';
import { css } from '@emotion/react';

export const AccountContainer = styled.div`
  margin-top: 6rem;
  margin-bottom: 6rem;
  .account {
    display: flex;
  }

  .account-back {
    flex: 1;
    display: flex;
    flex-direction: column;
    .account-title {
      h1 {
        font-size: 2.4rem;
      }
    }

    .account-form {
      margin-top: 5rem;
      border-radius: 0.7rem;
      .account-padding {
        padding: 3rem;
        .account-form-contents {
          display: flex;
          align-items: flex-start;
          .account-form-contents-left {
            display: flex;
            flex-direction: column;
            align-items: center;
            .profile-back {
              display: flex;
              align-items: center;
              justify-content: center;
              padding: 5rem;
              border-radius: 7rem;
              svg {
                font-size: 2.5rem;
              }
            }
            .profile-userBack {
              display: flex;
              align-items: center;
              justify-content: center;
              padding: 2.75rem;
              border-radius: 7rem;
              .profile-userBack-inner {
                display: flex;
                align-items: center;
                justify-content: center;
                width: 7rem;
                height: 7rem;
                img {
                  width: 100%;
                }
              }
            }
            .profile-filebox {
              margin-top: 1.5rem;
              display: flex;
              align-items: center;
              justify-content: center;
              label {
                display: inline-block;
                padding: 1rem 1rem;
                vertical-align: middle;
                cursor: pointer;
                height: 4rem;
                margin-left: 1rem;
                font-size: 1.5rem;
              }
              input[type='file'] {
                position: absolute;
                width: 0;
                height: 0;
                padding: 0;
                overflow: hidden;
                border: 0;
              }
            }
          }
          .account-form-contents-right {
            flex: 1;
            display: flex;
            flex-direction: column;
            padding-left: 7.5rem;
            .account-input {
              margin-bottom: 5rem;
              display: flex;
              align-items: center;
              label {
                font-size: 1.75rem;
                padding-right: 5rem;
              }
              input {
                flex: 1;
                border: 1px solid #fff;
                outline: none;
                border-radius: 0.7rem;
                padding: 2rem 1rem;
                font-size: 1.75rem;
                &::placeholder {
                  font-size: 1.75rem;
                }
              }
            }
          }
        }
        .account-form-button {
          padding-top: 40rem;
          .button-box {
            display: flex;
            align-items: center;
            justify-content: flex-end;
          }
          button {
            border: none;
            background: none;
            outline: none;
            cursor: pointer;
            border-radius: 5rem;
            padding: 1.5rem 4.25rem;
            margin-left: 3rem;
            font-size: 1.75rem;
            font-weight: bold;
            &:hover {
              opacity: 0.9;
            }
          }
        }
      }
    }
  }

  .Toastify__toast-container {
    width: 40rem;
    height: 15rem;

    font-size: 2rem;
  }
`;

export const AccountContainerStyles = (theme) => css`
  .account-title {
    h1 {
      color: ${theme.font_s};
    }
  }

  .account-form {
    background: ${theme.border};
    .account-padding {
      .account-form-contents {
        .account-form-contents-left {
          .profile-back {
            background: #fff;
            svg {
              color: ${theme.primary};
            }
          }
          .profile-userBack {
            background: #fff;
          }
          .profile-filebox {
            label {
              color: #838383;
            }
            input[type='file'] {
            }
          }
        }
        .account-form-contents-right {
          .account-input {
            label {
              color: #17090e;
            }
          }
        }
      }
      .account-form-button {
        .button-box {
          button {
            background: ${theme.primary};
            color: ${theme.font_p};
          }
        }
      }
    }
  }

  .Toastify__toast--default {
    background: #fff;
    color: #17090e;
  }
`;
