/** @jsxImportSource @emotion/react */
import { useTheme } from '@emotion/react';
import React from 'react';
import { LectureItemContainer, LectureItemContainerStyles } from './styles';

const LectureItem = ({ classroom }) => {
  const theme = useTheme();
  if (classroom) {
    console.log(classroom);
  }
  return (
    <LectureItemContainer css={LectureItemContainerStyles(theme)}>
      <div className="item-title">
        <div className="item-title-left">
          <p>{classroom.category}</p>
          <h1>{classroom.title}</h1>
        </div>
        <div className="item-title-right">
          <img
            src={`http://localhost:4000/${classroom.thumbUrl}`}
            alt="classThumb.png"
          />
        </div>
      </div>
    </LectureItemContainer>
  );
};

export default LectureItem;
