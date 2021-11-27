/** @jsxImportSource @emotion/react */
import React, { useCallback } from 'react';
import { useTheme } from '@emotion/react';
import { LectureItemContainer, LectureItemContainerStyles } from './styles';
import ConditionLectureItem from './ConditionLectureItem';
import { useLocation, withRouter } from 'react-router';

const LectureItem = ({ history, classroom }) => {
  const theme = useTheme();
  const location = useLocation();

  const onPush = useCallback(() => {
    history.push(`/lecture/:${classroom.category}/classroom/:${classroom.id}`);
  }, [history]);
  return (
    classroom && (
      <LectureItemContainer
        location={location.pathname === '/mypage' ? true : false}
        onClick={location.pathname === '/mypage' ? null : onPush}
        css={LectureItemContainerStyles(theme)}
      >
        <div className="item-title">
          <div className="item-title-left">
            <p>{classroom.category}</p>
            <h1>{classroom.name}</h1>
          </div>
          <div className="item-title-right">
            <img src={`/${classroom.classroomImg}`} alt="classThumb.png" />
          </div>
        </div>
        <ConditionLectureItem classroom={classroom} type={location} />
      </LectureItemContainer>
    )
  );
};

export default React.memo(withRouter(LectureItem));
