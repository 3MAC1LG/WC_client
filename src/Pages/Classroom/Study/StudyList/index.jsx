/** @jsxImportSource @emotion/react */
import React from 'react';
import { ListStyleDark, ListStyles } from './styles';
import { FaUser } from 'react-icons/fa';
import { useTheme } from '@emotion/react';

const StudyList = () => {
  const theme = useTheme();
  return (
    <ListStyles css={ListStyleDark(theme)}>
      <div className="studyroom-list">
        <div className="studyroom-item">
          <div className="image"></div>
          <div className="content">
            <div className="studyroom-title">
              <div className="room-title">함께공부해요!!</div>
              <div>2강.JSX</div>
            </div>
            <div className="room-user-info">
              <div className="owner">
                <FaUser />
                <div>Michael</div>
              </div>
              <div>4명 참여중</div>
            </div>
          </div>
        </div>
      </div>
    </ListStyles>
  );
};

export default StudyList;
