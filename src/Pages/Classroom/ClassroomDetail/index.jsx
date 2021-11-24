/** @jsxImportSource @emotion/react */
import { useTheme } from '@emotion/react';
import React from 'react';
import {
  ClassroomDetailContainer,
  ClassroomDetailContainerStyles,
  StudyroomStyles,
} from './styles';
import Study from '../Study';
import Question from '../Question';
import Responsive from '../../../lib/styles/Responsive';

const ClassroomDetail = () => {
  const theme = useTheme();
  return (
    <ClassroomDetailContainer css={ClassroomDetailContainerStyles(theme)}>
      <div className="classroom-padding">
        <div className="classroom-contents">
          <div className="classroom-contents-title">
            <p>프론트엔드</p>
            <h1>기초부터 탄탄하게 React</h1>
          </div>
          <div className="classroom-contents-grid">
            <div className="video-desc">
              <div className="classroom-video"></div>
              <div className="lecture-info">
                <div>강의 개수</div>
                <div>학습 시간</div>
              </div>
            </div>
            <div className="classroom-section">
              <div className="per-section">
                <div>섹션 1.리액트의 기초</div>
                <div>리액트 시작</div>
                <div>JSX</div>
                <div>컴포넌트</div>
              </div>
              <div className="per-section">
                <div>섹션 1.리액트의 기초</div>
                <div>리액트 시작</div>
                <div>JSX</div>
                <div>컴포넌트</div>
              </div>
              <div className="per-section">
                <div>섹션 1.리액트의 기초</div>
                <div>리액트 시작</div>
                <div>JSX</div>
                <div>컴포넌트</div>
              </div>
            </div>
          </div>
        </div>
        <hr />
        <Study />
        <hr />
        <Question />
      </div>
    </ClassroomDetailContainer>
  );
};

export default ClassroomDetail;
