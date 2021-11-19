import styled from '@emotion/styled';
import { css } from '@emotion/react';

export const ModalBackground = styled.div`
  & > .modal-box {
    background-color: #eef3fd;
    border: #7689fd solid 1px;
    border-radius: 5px;
    color: #505bf0;
    height: auto;
    margin-top: 0.68rem;
    padding: 2.5rem 5rem;
    position: absolute;
    display: flex;
    align-items: center;
    justify-content: center;
    writing-mode: vertical-lr;
    z-index: 1011;
    top: 5rem;
    left: -7rem;

    span {
      font-size: 1.5rem;
    }

    .modal-space {
      padding: 0.1rem 4rem;
      margin: 1rem 0;
      background: #fff;
    }
  }

  & > .modal-box::after {
    border-color: #eef3fd transparent;
    border-style: solid;
    border-width: 0 0.6rem 0.8rem 0.65rem;
    content: '';
    display: inline-block;
    left: 8.3rem;
    position: absolute;
    top: -0.7rem;
    width: 0;
    z-index: 1;
  }

  & > .modal-box::before {
    border-color: #7689fd transparent;
    border-style: solid;
    border-width: 0 0.6rem 0.8rem 0.65rem;
    content: '';
    display: inline-block;
    left: 8.3rem;
    position: absolute;
    top: -0.8rem;
    width: 0;
    z-index: 0;
  }
`;
