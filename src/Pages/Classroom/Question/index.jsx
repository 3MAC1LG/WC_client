/** @jsxImportSource @emotion/react */
import { useTheme } from '@emotion/react';
import React from 'react';
import StudyroomModal from '../../../components/StudyroomModal';
import Responsive from '../../../lib/styles/Responsive';
import QuestionList from './QuestionList';
import { QuestionDark, QuestionStyles } from './styles';

const Question = () => {
  const theme = useTheme();
  return (
    <QuestionStyles css={QuestionDark(theme)}>
      <div className="question-header">
        <h1>질문게시판</h1>
        <div className="question-header-button">내 질문보기</div>
      </div>
      <div className="question-list">
        <QuestionList />
        <QuestionList />
        <QuestionList />
      </div>
      <StudyroomModal />
    </QuestionStyles>
  );
};

export default Question;
