import { css } from '@emotion/react';
import styled from '@emotion/styled';
export const PreviewLectureList = styled.div`
  .form-layout {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin-top: 6rem;

    .preview-box {
      width: 47rem;
      margin-top: 3rem;
      border-radius: 2rem;
      background-color: #f1f3f9;

      .preview-box-padding {
        display: flex;
        flex-direction: column;
        align-items: center;
        padding: 2rem;
        .preview-box-title {
          font-size: 1.8rem;
          margin-bottom: 2rem;
          color: #292a2d;
        }
        hr {
          background-color: #eceef6;
          position: relative;

          width: 47rem;
        }
      }
      .preview-box-button {
        display: flex;
        justify-content: space-around;
        margin-top: 4rem;
        padding: 2rem;
        div {
          border-radius: 3rem;
          width: 13rem;
          height: 4rem;
          font-size: 1.4rem;
          color: #fcfdfe;
        }
        .prev {
          display: flex;
          justify-content: center;
          align-items: center;
          background-color: #fed595;
        }
        .prev:hover {
          opacity: 0.9;
          cursor: pointer;
        }
        .create {
          display: flex;
          justify-content: center;
          align-items: center;
          background-color: #8a85ec;
        }
        .create:hover {
          opacity: 0.9;
          cursor: pointer;
        }
      }
    }
  }
`;

export const NextDark = (theme) => css`
  .form-layout {
    .preview-box {
      background-color: #f1f3f9;

      .preview-box-button {
        .prev {
          background-color: ${theme.btn_y};
        }

        .create {
          background-color: ${theme.font_b};
        }
      }
    }
  }
`;
