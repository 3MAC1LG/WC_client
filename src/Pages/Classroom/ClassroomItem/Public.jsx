/** @jsxImportSource @emotion/react */
import React, { Fragment, useCallback, useEffect, useState } from 'react';
import useSWR from 'swr';
import { useParams } from 'react-router-dom';
import styled from '@emotion/styled';
import { css, useTheme } from '@emotion/react';
import { AiOutlineUnlock, AiOutlineUser } from 'react-icons/ai';
import { fetcher } from '../../../lib/api/fetcher';
import { withRouter } from 'react-router-dom';
import { Modal } from 'react-responsive-modal';
import 'react-responsive-modal/styles.css';
import {
  ModalContainer,
  ModalContainerStyles,
} from '../../Detail/DetailItem/styles';
import './styles.css';
import Button from '../../../components/Button';
import { useDispatch, useSelector } from 'react-redux';
import {
  join_studyroom,
  reset_studyroomFormPagePrev,
} from '../../../reducers/studyroomSlice';

const Public = ({ history }) => {
  const join = useSelector((state) => state.studyrooms.join);
  const dispatch = useDispatch();
  const { classroomId } = useParams();
  const { data: studyroomsData } = useSWR(
    `/api/studyrooms/${classroomId}`,
    fetcher,
  );
  const theme = useTheme();
  const [modal, setModal] = useState(false);

  const onClose = useCallback(() => {
    setModal(false);
  }, [setModal]);
  const onOpen = useCallback(() => {
    setModal(true);
  }, [setModal]);

  const onApply = useCallback(
    (id) => {
      dispatch(join_studyroom(id));
      setModal(false);
    },
    [history, classroomId, dispatch],
  );

  useEffect(() => {
    if (join) {
      history.push(
        `/classroom/${classroomId}/studyroom/:${join.data.StudyroomId}`,
      );
      reset_studyroomFormPagePrev();
    }
  }, [join, reset_studyroomFormPagePrev]);
  return studyroomsData ? (
    studyroomsData.data.public.length > 0 ? (
      studyroomsData.data.public.map((studyroom) => (
        <Fragment key={studyroom.id}>
          <ItemContainer css={ItemContainerStyle(theme)} onClick={onOpen}>
            <div className="item-thumb">
              <AiOutlineUnlock />
            </div>
            <div className="item-title">
              <h1>{studyroom.title}</h1>
              <p>{studyroom.Video.title}</p>
            </div>
            <div className="item-user">
              <div className="item-owner">
                <AiOutlineUser />
                <span>{studyroom.Owner.email}</span>
              </div>
              <div className="item-inviter">
                <span>{studyroom.StudyroomMembers.length}명 참여중</span>
              </div>
            </div>
          </ItemContainer>
          <Modal
            open={modal}
            showCloseIcon={false}
            center={true}
            classNames={{ modal: 'detail-modal' }}
            onClose={onClose}
          >
            <ModalContainer css={ModalContainerStyles(theme)}>
              <h1>{studyroom.title}</h1>
              <p>스터디룸에 참가하시겠습니까?</p>
              <div className="detail-button-box">
                <Button onClick={() => onApply(studyroom.id)} text="참가" />
                <Button onClick={onClose} text="취소" />
              </div>
            </ModalContainer>
          </Modal>
        </Fragment>
      ))
    ) : (
      <div className="item-none">개설된 스터디룸이 존재하지 않습니다</div>
    )
  ) : (
    <div className="item-none">개설된 스터디룸이 존재하지 않습니다</div>
  );
};

export default React.memo(withRouter(Public));

export const ItemContainer = styled.div`
  width: 100%;
  padding: 1.5rem;
  border-radius: 1.2rem;
  .item-thumb {
    width: 100%;
    height: 20rem;
    border-radius: 0.8rem;
    display: flex;
    align-items: center;
    justify-content: center;
    svg {
      font-size: 1.9rem;
    }
  }
  .item-title {
    margin: 2rem 0;
    h1 {
      font-size: 1.6rem;
    }
    p {
      margin-top: 1rem;
      font-size: 1.25rem;
    }
  }
  .item-user {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 1rem 0;
    .item-owner {
      display: flex;
      align-items: center;
      span {
        padding-left: 0.5rem;
        font-size: 1.25rem;
      }
      svg {
        font-size: 1.75rem;
      }
    }
    .item-inviter {
      font-size: 1.25rem;
    }
  }
`;

export const ItemContainerStyle = (theme) => css`
  background: ${theme.modal_a};
  color: ${theme.font_s};
  cursor: pointer;
  &:hover {
    box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
  }
  .item-thumb {
    background: #f1f3f9;
    svg {
      color: ${theme.font_b};
    }
  }
`;
