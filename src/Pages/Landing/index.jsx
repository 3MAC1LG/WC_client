/** @jsxImportSource @emotion/react */
import { useTheme } from '@emotion/react';
import React, { useCallback } from 'react';
import { withRouter } from 'react-router';
import Responsive from '../../lib/styles/Responsive';
import IntroStack from '../../lib/styles/svg/IntroStack';
import PartOne from '../../lib/styles/svg/PartOne';
import PartTwo from '../../lib/styles/svg/PartTwo';
import LottieLanding from '../../lottie/LottieLanding';
import useDarkMode from 'use-dark-mode';
import {
  LandingContainer,
  LandingContainerStyles,
  LandingLastContainer,
  LandingLastContainerStyles,
  LandingLogin,
  LandingLoginStyles,
  PartOneContainer,
  PartOneContainerStyles,
} from './styles';

const Landing = ({ history }) => {
  const theme = useTheme();
  const darkMode = useDarkMode(false);

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
            <div className="intro-right">
              <LottieLanding />
            </div>
          </div>
        </Responsive>
      </LandingContainer>
      <PartOneContainer darkMode={darkMode} css={PartOneContainerStyles(theme)}>
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
          <div className="part-one-svg">
            <PartOne />
          </div>
          <div className="part-one-title">
            <p className="part-one-title-1 two-title">
              중요한 부분은 <span>하이라이트</span>
            </p>
            <p className="part-one-title-2">한 번 듣고 넘기지 말아요!</p>
            <p className="part-one-title-3">
              중요한 부분은 마킹하고, 반복 학습을 해요
            </p>
          </div>
          <div className="part-two">
            <div className="part-two-svg">
              <PartTwo />
            </div>
          </div>
        </Responsive>
      </PartOneContainer>
      <LandingLastContainer
        darkMode={darkMode}
        css={LandingLastContainerStyles(theme)}
      >
        <Responsive>
          <div className="landing-last">
            <button>로그인하고 강의 들으러가기</button>
          </div>
        </Responsive>
      </LandingLastContainer>
    </>
  );
};

export default withRouter(Landing);
