import { css } from '@emotion/react';
import styled from '@emotion/styled';

export const DetailItemContainer = styled.div`
  flex: 1;
  border-radius: 1.2rem;
  .detail-padding {
    padding: 3rem;
  }
  .detail-intro {
    display: flex;
    align-items: center;
    justify-content: space-between;
    .detail-intro-left {
      p {
        margin: 0;
        font-size: 1.9rem;
        padding-bottom: 0.5rem;
      }
      h1 {
        font-size: 2.4rem;
      }
      .detail-desc {
        margin-top: 4rem;
      }
    }
    .detail-intro-right {
      width: 9rem;
      height: 9rem;
      border-radius: 4.5rem;
      display: flex;
      align-items: center;
      justify-content: center;
      box-shadow: rgba(60, 64, 67, 0.3) 0px 1px 2px 0px,
        rgba(60, 64, 67, 0.15) 0px 2px 6px 2px;
      img {
        width: 70%;
      }
    }
  }

  .detail-info {
    display: flex;
    align-content: center;
    justify-content: space-between;
    margin-top: 5rem;
    .detail-info-left {
      display: flex;
      p {
        margin: 0;
        font-size: 1.5rem;
        padding-right: 3rem;
        span {
          font-weight: bold;
        }
      }
    }
    .detail-info-left {
    }
  }
  .detail-cur {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin-top: 10rem;
    margin-bottom: 3rem;

    h1 {
      font-size: 2.4rem;
      margin-bottom: 3rem;
    }
  }
`;

export const DetailContainerStyles = (theme) => css`
  background: ${theme.border};
  .detail-intro {
    .detail-intro-left {
      color: #080305;
      p {
      }
      h1 {
      }
      .detail-desc {
      }
    }
    .detail-intro-right {
      img {
      }
    }
  }
`;

export const ModalContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 40rem;
  h1 {
    padding: 1rem 0;
    font-size: 2.4rem;
  }
  p {
    padding-top: 2rem;
    padding-bottom: 3rem;
    font-size: 1.9rem;
  }
  .detail-button-box {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    padding-bottom: 2rem;
  }
`;

export const ModalContainerStyles = (theme) => css`
  h1 {
  }
  p {
  }
`;
