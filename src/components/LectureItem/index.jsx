/** @jsxImportSource @emotion/react */
import React from 'react';
import { useTheme } from '@emotion/react';
import { LectureItemContainer, LectureItemContainerStyles } from './styles';
import ConditionLectureItem from './ConditionLectureItem';
import { useLocation } from 'react-router';

const LectureItem = ({ classroom }) => {
  const theme = useTheme();
  const location = useLocation();

  return (
    classroom && (
      <LectureItemContainer css={LectureItemContainerStyles(theme)}>
        <div className="item-title">
          <div className="item-title-left">
            <p>{classroom.category}</p>
            <h1>{classroom.name}</h1>
          </div>
          <div className="item-title-right">
            <img
              src={`http://localhost:4000/${classroom.classroomImg}`}
              alt="classThumb.png"
            />
          </div>
        </div>
        <ConditionLectureItem classroom={classroom} type={location} />
      </LectureItemContainer>
    )
  );
};

export default LectureItem;
