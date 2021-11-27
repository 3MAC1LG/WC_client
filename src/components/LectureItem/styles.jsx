import styled from '@emotion/styled';
import { css } from '@emotion/react';

export const LectureItemContainer = styled.div`
  border-radius: 2rem;
  padding: 3rem;
  ${(props) =>
    props.location
      ? null
      : css`
          cursor: pointer;
        `}
  &:hover {
    box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
  }
  .item-title {
    display: flex;
    .item-title-left {
      flex: 1;
      display: flex;
      flex-direction: column;
      p {
        margin: 0;
        font-size: 1.9rem;
        font-weight: bold;
        padding-bottom: 0.5rem;
      }
      h1 {
        font-size: 2.4rem;
      }
    }
    .item-title-right {
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
`;

export const LectureItemContainerStyles = (theme) => css`
  background: ${theme.border};
  .item-title {
    .item-title-left {
      color: #080305;
      p {
      }
      h1 {
      }
    }
    .item-title-right {
      background: #ffffff;
      img {
      }
    }
  }
`;
