/** @jsxImportSource @emotion/react */
import React, { useCallback } from 'react';
import { withRouter } from 'react-router';
import { ModalBackground } from './styles';

const Modal = ({ history, modal, setModal }) => {
  const stopPropagation = useCallback((e) => {
    e.stopPropagation();
  }, []);
  const onPush = useCallback(() => {
    history.push('/account');
    setModal(false);
  }, [history]);
  return (
    <ModalBackground>
      <div className="modal-box" onClick={stopPropagation}>
        <span onClick={onPush}>계정관리</span>
        <div className="modal-space" />
        <span>로그아웃</span>
      </div>
    </ModalBackground>
  );
};

export default withRouter(Modal);
