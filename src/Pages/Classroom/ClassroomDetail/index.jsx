/** @jsxImportSource @emotion/react */
import { useTheme } from '@emotion/react';
import React from 'react';
import {
  ClassroomDetailContainer,
  ClassroomDetailContainerStyles,
} from './styles';

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
            <div className="classroom-video"></div>
            <div className="classroom-section"></div>
          </div>
        </div>
        <div className="classroom-studyroom"></div>
        <div className="classroom-qna"></div>
      </div>
    </ClassroomDetailContainer>
  );
};

export default ClassroomDetail;
