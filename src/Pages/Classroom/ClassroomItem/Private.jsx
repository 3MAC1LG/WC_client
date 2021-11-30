/** @jsxImportSource @emotion/react */
import React from 'react';
import useSWR from 'swr';
import { useParams } from 'react-router-dom';
import { useTheme } from '@emotion/react';
import { AiOutlineLock, AiOutlineUser } from 'react-icons/ai';
import { fetcher } from '../../../lib/api/fetcher';
import { ItemContainer, ItemContainerStyle } from './Public';
import Modal from 'react-responsive-modal';

const Private = () => {
  const { classroomId } = useParams();
  const { data: studyroomsData } = useSWR(
    `/api/studyrooms/${classroomId}`,
    fetcher,
  );
  const theme = useTheme();
  return studyroomsData ? (
    studyroomsData.data.private.length > 0 ? (
      studyroomsData.data.private.map((studyroom, idx) => (
        <>
          <ItemContainer key={studyroom.id} css={ItemContainerStyle(theme)}>
            <div className="item-thumb">
              <AiOutlineLock />
            </div>
            <div className="item-title">
              <h1>{studyroom.title}</h1>
              <p>{studyroom.Video.title}</p>
            </div>
            <div className="item-user">
              <div className="item-owner">
                <AiOutlineUser />
                <span>{studyroom.Owner.nickname}</span>
              </div>
            </div>
          </ItemContainer>
          <Modal
            key={idx}
            showCloseIcon={false}
            center={true}
            classNames={{ modal: 'detail-modal' }}
          ></Modal>
        </>
      ))
    ) : (
      <div className="item-none">개설된 스터디룸이 존재하지 않습니다</div>
    )
  ) : (
    <div className="item-none">개설된 스터디룸이 존재하지 않습니다</div>
  );
};

export default Private;
