/** @jsxImportSource @emotion/react */
import React, { useState } from 'react';
import { QuestionListDark, QuestionListStyles } from './styles';
import { AiFillLike } from 'react-icons/ai';
import { useTheme } from '@emotion/react';
import Responsive from '../../../../lib/styles/Responsive';

const QuestionList = () => {
  const theme = useTheme();

  // const [modal, setModal] = useState(false);
  // const onShowModal = () => {
  //   setModal(!modal);
  // };
  return (
    <QuestionListStyles css={QuestionListDark(theme)}>
      <div className="question-box">
        <div className="question-info">
          <div>2강. JSX</div>
          <div>2021-11-23</div>
        </div>
        <div className="question-desc">리액트 기초 문법이 이해가 안돼요 </div>
        <div className="question-response">
          <div className="question-response-like">
            <AiFillLike className="like-icon" />
            <div>13</div>
          </div>
          <div className="question-response-check">답변완료</div>
        </div>
      </div>
    </QuestionListStyles>
  );
};

export default QuestionList;
