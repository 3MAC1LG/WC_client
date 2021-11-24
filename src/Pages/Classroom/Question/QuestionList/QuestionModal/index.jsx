/** @jsxImportSource @emotion/react */
import { useTheme } from '@emotion/react';
import React from 'react';
import { ModalContainer, ModalDark } from './styles';

const QuestionModal = () => {
  const theme = useTheme();
  return (
    <ModalContainer css={ModalDark(theme)}>
      <div className="modal-header">
        <div>2강.JSX</div>
        <div>2021년 11월 25일</div>
      </div>
      <div className="modal-middle">
        <div className="middle-text">리액트 기본 문법이 이해가 안돼요.</div>
        <div className="middle-editor">작성자 Paul</div>
      </div>
      <div className="modal-footer">
        <div className="answer">답변</div>
        <div className="comment">강의자료 18페이지를 참고하세요.</div>
      </div>
    </ModalContainer>
  );
};

export default QuestionModal;
