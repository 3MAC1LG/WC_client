/** @jsxImportSource @emotion/react */
import React, { useCallback } from 'react';
import LottieNotLogin from '../../lottie/LottieNotLogin';
import styled from '@emotion/styled';
import Responsive from '../../lib/styles/Responsive';
import { css, useTheme } from '@emotion/react';
import { withRouter } from 'react-router';

const NotLogin = ({ history }) => {
  const onPushLogin = useCallback(() => {
    history.push('/login');
  }, [history]);
  const theme = useTheme();
  return (
    <NotLoginContainer css={NotLoginContainerStyles(theme)}>
      <Responsive>
        <div className="not-login">
          <LottieNotLogin />
          <div className="not-login-text">
            <p>로그인이 필요한 서비스입니다</p>
            <p>로그인 후 이용해주세요</p>
          </div>
          <button onClick={onPushLogin}>로그인하러 가기</button>
        </div>
      </Responsive>
    </NotLoginContainer>
  );
};

export default withRouter(NotLogin);

const NotLoginContainer = styled.div`
  margin-top: 6rem;
  margin-bottom: 6rem;

  .not-login {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    svg {
    }
    .not-login-text {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      margin-top: 4rem;
      margin-bottom: 4rem;
      p {
        font-size: 2.3rem;
        margin-bottom: 0.5rem;
      }
    }
    button {
      border: none;
      background: none;
      outline: none;

      cursor: pointer;
      border-radius: 0.7rem;
      padding: 2rem 12rem;
      font-size: 2.25rem;
      font-weight: bold;
      &:hover {
        opacity: 0.9;
      }
    }
  }
`;

const NotLoginContainerStyles = (theme) => css`
  .not-login {
    svg {
    }
    .not-login-text {
      p {
        color: ${theme.font_l};
      }
    }
    button {
      background: ${theme.active};
      color: ${theme.font_a};
    }
  }
`;
