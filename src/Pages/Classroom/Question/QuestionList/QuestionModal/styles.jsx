import { css } from '@emotion/react';
import styled from '@emotion/styled';

export const ModalContainer = styled.div`
  width: 70rem;

  padding: 4rem;

  .modal-header {
    font-size: 2.4rem;
    display: flex;
    justify-content: space-between;
    margin-bottom: 2rem;
  }
  .modal-middle {
    padding: 1rem 0;
    border-top: 1px solid #e1e4e9;
    border-bottom: 1px solid #e1e4e9;
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
      width: 8rem;
      margin-bottom: 1rem;
    }

    .comment {
      margin-bottom: 1rem;
    }
    .close {
      display: flex;
      justify-content: center;
      align-items: center;
      width: 8rem;
      margin-bottom: 1rem;
    }
    .close:hover {
      opacity: 0.9;
      cursor: pointer;
    }
  }
`;

export const ModalDark = (theme) => css`
  background-color: ${theme.modal_b};

  .modal-header {
    color: ${theme.font_h};
  }
  .modal-middle {
    color: ${theme.font_h};
  }
  .modal-footer {
    .answer {
      background-color: ${theme.font_l};
      color: ${theme.font_a};
    }
    .comment {
      color: ${theme.font_h};
    }
    .close {
      background-color: ${theme.font_l};
      color: ${theme.font_a};
    }
  }
`;
