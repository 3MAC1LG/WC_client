import { css } from '@emotion/react';
import styled from '@emotion/styled';

export const ModalContainer = styled.div`
  padding: 4rem;
  width: 80rem;
  @media (max-width: 768px) {
    padding: 8rem;
  }
  @media (max-width: 480px) {
    padding: 12rem;
  }

  .modal-header {
    font-size: 2.4rem;
    display: flex;
    justify-content: space-between;
    margin-bottom: 2rem;
  }
  .modal-middle {
    border-top: 1px solid #e1e4e9;
    border-bottom: 1px solid #e1e4e9;
    padding: 1rem 0;

    .middle-text {
      display: flex;
      justify-content: flex-start;
      font-size: 2rem;
      padding-bottom: 40rem;
    }

    .middle-editor {
      display: flex;
      justify-content: flex-end;
      font-size: 1.6rem;
    }
  }

  .modal-footer {
    padding: 1rem;
    font-size: 2rem;
    .answer {
      display: flex;
      justify-content: center;
      align-items: center;
      width: 6rem;
      background-color: #8a85ec;
      color: #fcfdfe;
      margin-bottom: 1rem;
    }
  }
`;

export const ModalDark = (theme) => css`
  background-color: ${theme.modal_b};
`;
