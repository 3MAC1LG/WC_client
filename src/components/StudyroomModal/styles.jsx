import styled from '@emotion/styled';

export const StudyModal = styled.div`
  background-color: #ffffff;

  .modal-padding {
    padding: 2rem;
    .close-icon {
      display: flex;
      justify-content: flex-end;
      color: #8a85ec;
      font-size: 3rem;
    }

    .modal-content {
      padding: 3rem 5rem;
      font-size: 2rem;
      display: flex;
      flex-direction: column;
      justify-content: space-between;

      .modal-header {
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin-bottom: 2rem;
      }

      .modal-middle {
        padding: 2rem 0;
        border-top: 1px solid black;
        border-bottom: 1px solid black;
        display: flex;
        flex-direction: column;
        .question-content {
          display: flex;
          justify-content: flex-start;
          margin-bottom: 5rem;
        }
        .editor {
          display: flex;
          justify-content: flex-end;
        }
      }

      .modal-footer {
        margin-top: 2rem;

        .answer-marker {
          display: flex;
          justify-content: center;
          align-items: center;
          background-color: #8a85ec;
          width: 7rem;
          padding: 0.5rem 1rem;
          color: #fcfdfe;
          margin-bottom: 1.5rem;
        }
      }
    }
  }
`;
