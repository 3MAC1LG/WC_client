/** @jsxImportSource @emotion/react */
import { useTheme } from '@emotion/react';
import React, { useCallback, useState } from 'react';
import {
  ClassroomDetailContainer,
  ClassroomDetailContainerStyles,
  Split,
} from './styles';
import Collapse from '../../../components/Collapse';
import useSWR from 'swr';
import { fetcher } from '../../../lib/api/fetcher';
import { useParams, withRouter } from 'react-router';
import Button from '../../../components/Button';
import { AiOutlineUnlock, AiOutlineLock } from 'react-icons/ai';
import Public from '../ClassroomItem/Public';
import Private from '../ClassroomItem/Private';
import { Modal } from 'react-responsive-modal';
import {
  ModalContainer,
  ModalContainerStyles,
} from '../../Detail/DetailItem/styles';

const ClassroomDetail = ({ history }) => {
  const { classroomId } = useParams();
  const { data: userData } = useSWR('/api/users', fetcher);
  const { data: classroomData } = useSWR(
    userData ? `/api/classrooms/${classroomId}` : null,
    fetcher,
  );
  const { data: sectionData } = useSWR(
    userData ? `/api/sections/${classroomId}` : null,
    fetcher,
  );
  const [modal, setModal] = useState(false);
  const theme = useTheme();
  let sum = 0;
  const onPushStudyroomForm = useCallback(() => {
    history.push(`/classroom/${classroomId}/studyroom`);
  }, [history]);

  const onOpen = useCallback(() => {
    setModal(true);
  }, [setModal]);
  const onClose = useCallback(() => {
    setModal(false);
  }, [setModal]);

  console.log(classroomData);

  return (
    <>
      <ClassroomDetailContainer css={ClassroomDetailContainerStyles(theme)}>
        <div className="classroom-padding">
          <div className="classroom-contents">
            <div className="classroom-contents-title">
              <p>{classroomData?.data?.category}</p>
              <h1>{classroomData?.data?.name}</h1>
            </div>
            <div className="classroom-contents-grid">
              <div className="video-desc">
                <div className="classroom-video"></div>
                <div className="lecture-info">
                  <div>
                    강의 개수{' '}
                    {sectionData?.data
                      ?.map((section) => sum + section.Videos.length)
                      .reduce((a, b) => a + b, 0) || 0}
                  </div>
                  <div>학습 시간</div>
                </div>
              </div>
              {sectionData?.data && <Collapse data={sectionData.data} />}
            </div>
          </div>
          <Split />
          <div className="classroom-studyroom">
            <div className="studyroom-title">
              <h1>스터디룸</h1>
              <Button onClick={onOpen} text="개설하기" />
            </div>
            <div className="studyroom-common">
              <div className="studyroom-common-title">
                <AiOutlineUnlock />
                <h1>Open 스터디룸</h1>
              </div>
              <div className="studyroom-grid">
                <Public />
              </div>
            </div>
            <div className="studyroom-common">
              <div className="studyroom-common-title">
                <AiOutlineLock />
                <h1>Private 스터디룸</h1>
              </div>
              <div className="studyroom-grid">
                <Private />
              </div>
            </div>
          </div>
        </div>
      </ClassroomDetailContainer>
      <Modal
        open={modal}
        showCloseIcon={false}
        center={true}
        onClose={onClose}
        classNames={{ modal: 'detail-modal' }}
      >
        <ModalContainer css={ModalContainerStyles(theme)}>
          <h1 style={{ margin: '2rem' }}>스터디룸을 개설하시겠습니까?</h1>
          <div className="detail-button-box">
            <Button onClick={onPushStudyroomForm} text="개설하기" />
            <Button onClick={onClose} text="취소" />
          </div>
        </ModalContainer>
      </Modal>
    </>
  );
};

export default React.memo(withRouter(ClassroomDetail));
