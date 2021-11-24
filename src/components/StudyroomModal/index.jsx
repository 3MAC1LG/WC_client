import React from 'react';
import { MdOutlineClose } from 'react-icons/md';
import { StudyModal } from './styles';

const StudyroomModal = () => {
  return (
    <StudyModal>
      <div className="modal-padding">
        <div className="close-icon">
          <MdOutlineClose />
        </div>
        <div className="modal-content">
          <div className="modal-header">
            <div>2.JSX</div>
            <div>2021년 11월 10일</div>
          </div>
          <div className="modal-middle">
            <div className="question-content">
              리액트 기본 문법이 이해가 안돼요.
            </div>
            <div className="editor">작성자 Paul</div>
          </div>
          <div className="modal-footer">
            <div className="answer-marker">답변</div>
            <div>강의자료 18페이지를 참고하세요.</div>
          </div>
        </div>
      </div>
    </StudyModal>
  );
};

export default StudyroomModal;
