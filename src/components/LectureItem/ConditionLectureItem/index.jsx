/** @jsxImportSource @emotion/react */
import React, { useCallback } from 'react';
import { MdVideoLibrary } from 'react-icons/md';
import { AiOutlineClockCircle } from 'react-icons/ai';
import {
  MyPageContainer,
  MyPageStyleContainer,
  SearchContainer,
  SearchStyleContainer,
} from './styles';
import { useTheme } from '@emotion/react';
import Button from '../../Button';
import { withRouter } from 'react-router';

const ConditionLectureItem = ({ history, classroom, type }) => {
  const theme = useTheme();
  const onPush = useCallback(() => {
    history.push(`/classroom/:${classroom.id}`);
  }, [history]);
  return (
    <div>
      {type.pathname.includes('mypage') ? (
        <MyPageContainer css={MyPageStyleContainer(theme)}>
          <MdVideoLibrary className="lecture-video" />
          <div className="lecture-footer">
            <AiOutlineClockCircle className="lecture-time" />
            <Button onClick={onPush} text="강의실로 이동" />
          </div>
        </MyPageContainer>
      ) : (
        <SearchContainer css={SearchStyleContainer(theme)}>
          <div className="study-info">
            <MdVideoLibrary className="lecture-video" />
            <AiOutlineClockCircle className="lecture-time" />
          </div>
          <div className="class-desc">{classroom.desc}</div>
        </SearchContainer>
      )}
    </div>
  );
};

export default React.memo(withRouter(ConditionLectureItem));
