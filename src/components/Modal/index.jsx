/** @jsxImportSource @emotion/react */
import React, { useCallback, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { Redirect, withRouter } from 'react-router';
import { ModalBackground } from './styles';
import { get_logout, reset } from '../../reducers/userSlice';
import useSWR from 'swr';
import { fetcher } from '../../lib/api/fetcher';

const Modal = ({ history, modal, setModal }) => {
  const { data: userData, mutate } = useSWR(
    'http://localhost:4000/api/users',
    fetcher,
  );
  const logout = useSelector((state) => state.users.logout);
  const dispatch = useDispatch();

  const stopPropagation = useCallback((e) => {
    e.stopPropagation();
  }, []);

  const onPush = useCallback(() => {
    history.push('/account');
    setModal(false);
  }, [history]);

  const onLogout = useCallback(() => {
    dispatch(get_logout());
  }, [dispatch]);

  useEffect(() => {
    if (logout) {
      console.log(logout);
      mutate();
    }
  }, [logout, mutate]);
  return (
    <ModalBackground>
      <div className="modal-box" onClick={stopPropagation}>
        <span onClick={onPush}>계정관리</span>
        <div className="modal-space" />
        <span onClick={onLogout}>로그아웃</span>
      </div>
    </ModalBackground>
  );
};

export default withRouter(Modal);
