import styled from '@emotion/styled';
import { css } from '@emotion/react';

export const LandingContainer = styled.div`
  width: 100%;
  margin-top: 7.5rem;
  margin-bottom: 3rem;

  font-size: 4rem;
  .intro {
    display: flex;
    align-items: center;
    .intro-left {
      flex: 0.5;
      .intro-left-text {
        font-weight: bold;
        span {
        }
      }
      .intro-left-stack {
        margin-top: 7.5rem;
        width: 45rem;
        svg {
          width: 100%;
          height: 100%;
        }
      }
      .intro-left-login {
        margin-top: 3rem;
        button {
          &:hover {
            opacity: 0.9;
          }
        }
      }
    }
    .intro-right {
      flex: 0.5;
    }
  }
`;

export const LandingContainerStyles = (theme) => css`
  .intro {
    .intro-left {
      .intro-left-text {
        color: ${theme.primary};
        span {
          color: ${theme.sub};
        }
      }
    }
  }
`;

export const LandingLogin = styled.button`
  border: none;
  background: none;
  outline: none;

  cursor: pointer;
  border-radius: 5rem;
  padding: 2rem 7.25rem;
  font-size: 2.25rem;
  font-weight: bold;
`;

export const LandingLoginStyles = (theme) => css`
  background: ${theme.primary};
  color: ${theme.font_p};
`;

export const PartOneContainer = styled.div`
  width: 100%;
  height: 100%;
  margin-bottom: 3rem;
  position: relative;
  ${(props) =>
    !props.darkMode.value &&
    css`
      background: url('./assets/images/circle.png') no-repeat;
    `}
  background-size: 135% auto;
  background-position: -25rem 0;
  .part-one-title {
    padding-top: 15rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    .part-one-title-1 {
      font-size: 4rem;
      font-weight: bold;
      margin-bottom: 2rem;
      span {
        position: relative;
        z-index: 999;
      }
      span:after {
        content: '';
        display: block;
        width: 100%;
        height: 2.65rem;
        position: absolute;
        bottom: -0.7rem;
        left: 0.1rem;
        z-index: -1;
      }
    }
    .part-one-title-1.two-title {
      padding-top: 15rem;
    }
    .part-one-title-2 {
      font-size: 1.85rem;
      margin-bottom: 0.5rem;
    }
    .part-one-title-3 {
      font-size: 1.85rem;
    }
  }
  .part-one-svg {
    margin-top: 6rem;
    width: 100%;
    svg {
      width: 100%;
      height: 100%;
    }
  }
  .part-two {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: 5rem;
    .part-two-svg {
      svg {
        width: 100%;
        height: 100%;
      }
    }
  }
`;

export const PartOneContainerStyles = (theme) => css`
  .part-one-title {
    color: ${theme.font_s};
    .part-one-title-1 {
      span {
      }
      span:after {
        background: ${theme.primary};
      }
    }
  }
`;

export const LandingLastContainer = styled.div`
  width: 100%;
  margin-top: 10rem;
  padding-bottom: 10rem;
  ${(props) =>
    !props.darkMode.value &&
    css`
      background: url('./assets/images/filterCircle.png') no-repeat;
    `}
  background-size: 135% auto;
  background-position: -25rem 0;
  .landing-last {
    display: flex;
    align-items: center;
    justify-content: center;
    button {
      border: none;
      background: none;
      outline: none;
      margin-top: 10rem;
      font-size: 2.25rem;
      padding: 2rem 7.25rem;
      border-radius: 5rem;
      cursor: pointer;
      font-weight: bold;
      &:hover {
        opacity: 0.9;
      }
    }
  }
`;

export const LandingLastContainerStyles = (theme) => css`
  .landing-last {
    button {
      background: ${theme.primary};
      color: ${theme.font_p};
    }
  }
`;
