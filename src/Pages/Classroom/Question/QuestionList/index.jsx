/** @jsxImportSource @emotion/react */
import React, { useCallback, useEffect, useState } from 'react';
import { ModalStyle, QuestionListDark, QuestionListStyles } from './styles';
import { AiFillLike } from 'react-icons/ai';
import { useTheme } from '@emotion/react';
import { Modal } from 'react-responsive-modal';
import 'react-responsive-modal/styles.css';
import QuestionModal from './QuestionModal';

const QuestionList = () => {
  const theme = useTheme();

  const [open, setOpen] = useState(false);
  const onOpenModal = () => setOpen(true);
  const onCloseModal = () => setOpen(false);

  const style = {
    modal: {
      padding: 0,
    },
  };
  return (
    <>
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
            <button className="question-response-check" onClick={onOpenModal}>
              답변완료
            </button>
          </div>
        </div>
      </QuestionListStyles>
      <Modal
        open={open}
        onClose={onCloseModal}
        center
        showCloseIcon={false}
        styles={style}
      >
        <QuestionModal setOpen={setOpen} />
      </Modal>
    </>
  );
};

export default QuestionList;
