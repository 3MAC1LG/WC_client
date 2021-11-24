/** @jsxImportSource @emotion/react */
import React from 'react';
import LottieNotFound from '../../lottie/LottieNotFound';
import styled from '@emotion/styled';
import Responsive from '../../lib/styles/Responsive';
import { css, useTheme } from '@emotion/react';

const NotFound = () => {
  const theme = useTheme();
  return (
    <NotFoundContainer css={NotFoundContainerStyles(theme)}>
      <Responsive>
        <div className="not-found">
          <LottieNotFound />
          <div className="not-found-text">
            <p>페이지를 찾을 수 없습니다</p>
          </div>
        </div>
      </Responsive>
    </NotFoundContainer>
  );
};

export default NotFound;

const NotFoundContainer = styled.div`
  margin-top: 6rem;
  margin-bottom: 6rem;
  .not-found {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    svg {
    }
    .not-found-text {
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
  }
`;

const NotFoundContainerStyles = (theme) => css`
  .not-found {
    svg {
    }
    .not-found-text {
      p {
        color: ${theme.font_l};
      }
    }
  }
`;
