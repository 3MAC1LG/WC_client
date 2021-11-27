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
    }
  }
`;
