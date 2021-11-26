/** @jsxImportSource @emotion/react */
import { useTheme } from '@emotion/react';
import React, { useCallback, useEffect, useState } from 'react';
import Button from '../../../components/Button';
import {
  DetailContainerStyles,
  DetailItemContainer,
  ModalContainer,
  ModalContainerStyles,
} from './styles';
import { Modal } from 'react-responsive-modal';
import 'react-responsive-modal/styles.css';
import './styles.css';
import useSWR from 'swr';
import { fetcher } from '../../../lib/api/fetcher';
import { useDispatch } from 'react-redux';
import { useParams } from 'react-router';
import {
  cancle_classroom,
  register_classroom,
  reset_classroom,
} from '../../../reducers/classroomSlice';
import { useSelector } from 'react-redux';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const DetailItem = ({ classroomData, mutate }) => {
  const { data: userData } = useSWR('/api/users', fetcher);
  const register = useSelector((state) => state.classrooms.register);
  const cancle = useSelector((state) => state.classrooms.cancle);
  const dispatch = useDispatch();
  const { classroomId } = useParams();
  const theme = useTheme();
  const [modal1, setModal1] = useState(false);
  const [modal2, setModal2] = useState(false);
  const onCloseModal1 = useCallback(() => {
    setModal1(false);
  }, [setModal1]);
  const onCloseModal2 = useCallback(() => {
    setModal2(false);
  }, [setModal2]);
  const onOpenModal1 = useCallback(() => {
    setModal1(true);
  }, [setModal1]);
  const onOpenModal2 = useCallback(() => {
    setModal2(true);
  }, [setModal2]);

  const onRegister = useCallback(() => {
    dispatch(register_classroom(classroomId));
    setModal1(false);
  }, [dispatch, mutate]);

  const onCancle = useCallback(() => {
    dispatch(cancle_classroom(classroomId));
    setModal2(false);
  }, [dispatch, mutate]);

  console.log(classroomData);

  useEffect(() => {
    if (register) {
      mutate();
      toast(`🎉 ${classroomData.name} 수강신청이 완료되었습니다`, {
        position: 'bottom-center',
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: false,
        draggable: true,
        progress: undefined,
        type: 'default',
      });
    }

    return () => dispatch(reset_classroom());
  }, [classroomData, register, mutate]);
  useEffect(() => {
    if (cancle) {
      mutate();
      toast(`${classroomData.name} 수강취소가 완료되었습니다`, {
        position: 'bottom-center',
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: false,
        draggable: true,
        progress: undefined,
        type: 'default',
      });
    }
    return () => dispatch(reset_classroom());
  }, [classroomData, cancle, mutate]);
  return (
    <>
      <DetailItemContainer css={DetailContainerStyles(theme)}>
        <div className="detail-padding">
          <div className="detail-intro">
            <div className="detail-intro-left">
              <p>{classroomData.category}</p>
              <h1>{classroomData.name}</h1>
              <p className="detail-desc">{classroomData.desc}</p>
            </div>
            <div className="detail-intro-right">
              <img
                src={`/${classroomData.classroomImg}`}
                alt="classThumb.png"
              />
            </div>
          </div>
          <div className="detail-info">
            <div className="detail-info-left">
              <p>
                수강인원{' '}
                <span>{`${classroomData.ClassroomMembers.length}`}명</span>
              </p>
              <p>
                강의 <span>총 00개의 강의</span>
              </p>
            </div>
            <div className="detail-info-right">
              {userData &&
              classroomData.ClassroomMembers.find(
                (member) => member.UserId === userData.id,
              ) ? (
                <Button onClick={onOpenModal2} text="수강취소" />
              ) : (
                <Button onClick={onOpenModal1} text="수강신청" />
              )}
            </div>
          </div>
        </div>
      </DetailItemContainer>
      <Modal
        open={modal1}
        showCloseIcon={false}
        center={true}
        onClose={onCloseModal1}
        classNames={{ modal: 'detail-modal' }}
      >
        <ModalContainer css={ModalContainerStyles(theme)}>
          <h1>{classroomData.name}</h1>
          <p>수강신청 하시겠습니까?</p>
          <div className="detail-button-box">
            <Button onClick={onRegister} text="수강신청" />
            <Button onClick={onCloseModal1} text="취소" />
          </div>
        </ModalContainer>
      </Modal>
      <Modal
        open={modal2}
        showCloseIcon={false}
        center={true}
        onClose={onCloseModal2}
        classNames={{ modal: 'detail-modal' }}
      >
        <ModalContainer css={ModalContainerStyles(theme)}>
          <h1>{classroomData.name}</h1>
          <p>수강취소 하시겠습니까??</p>
          <div className="detail-button-box">
            <Button onClick={onCancle} text="수강취소" />
            <Button onClick={onCloseModal2} text="취소" />
          </div>
        </ModalContainer>
      </Modal>
      <ToastContainer />
    </>
  );
};

export default DetailItem;
