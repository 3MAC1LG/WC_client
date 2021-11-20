/** @jsxImportSource @emotion/react */
import { useTheme } from '@emotion/react';
import React from 'react';
import KakaoLogin from '../../components/KakaoLogin';
import Responsive from '../../lib/styles/Responsive';
import Logo from '../../lib/styles/svg/Logo';
import { Container, ContainerStyles } from './styles';

const Login = () => {
  const theme = useTheme();
  return (
    <div>
      <Responsive>
        <Container css={ContainerStyles(theme)}>
          <div className="logo">
            <Logo />
          </div>
          <div className="text">로그인하여 더 많은 강좌를 학습하세요</div>
          <KakaoLogin />
        </Container>
      </Responsive>
    </div>
  );
};

export default Login;
