/** @jsxImportSource @emotion/react */
import { useTheme } from '@emotion/react';
import React, { useCallback } from 'react';
import { withRouter } from 'react-router';
import Responsive from '../../lib/styles/Responsive';
import IntroStack from '../../lib/styles/svg/IntroStack';
import {
  LandingContainer,
  LandingContainerStyles,
  LandingLogin,
  LandingLoginStyles,
  PartOneContainer,
} from './styles';

const Landing = ({ history }) => {
  const theme = useTheme();

  const onPush = useCallback(() => {
    history.push('/login');
  }, [history]);
  return (
    <>
      <LandingContainer css={LandingContainerStyles(theme)}>
        <Responsive>
          <div className="intro">
            <div className="intro-left">
              <p className="intro-left-text">
                이제는 <span>IT 모바일 시대</span>
                <br />
                <span>위드 클래스</span>와 함께
                <br />
                미래를 만들어가요
              </p>
              <div className="intro-left-stack">
                <IntroStack />
              </div>
              <div className="intro-left-login">
                <LandingLogin onClick={onPush} css={LandingLoginStyles(theme)}>
                  로그인하러 가기
                </LandingLogin>
              </div>
            </div>
            <div className="intro-right"></div>
          </div>
        </Responsive>
      </LandingContainer>
      <PartOneContainer>
        <Responsive>
          <div className="part-one-title">
            <p className="part-one-title-1">
              녹화강의 <span>실시간 공유</span>
            </p>
            <p className="part-one-title-2">
              혼자 듣는 따분한 강의는 이제 그만
            </p>
            <p className="part-one-title-3">친구와 함께 강의를 들어요</p>
          </div>
        </Responsive>
      </PartOneContainer>
    </>
  );
};

export default withRouter(Landing);
