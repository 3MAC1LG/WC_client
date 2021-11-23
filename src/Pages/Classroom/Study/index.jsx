/** @jsxImportSource @emotion/react */
import React from 'react';
import { AiOutlineSearch } from 'react-icons/ai';
import { MdLockOpen } from 'react-icons/md';
import { MdLockOutline } from 'react-icons/md';
import { FaUser } from 'react-icons/fa';
import { StudyroomContainer, StudyroomStyles } from './styles';
import { useTheme } from '@emotion/react';
import StudyList from './StudyList';

const Study = () => {
  const theme = useTheme();
  return (
    <StudyroomContainer css={StudyroomStyles(theme)}>
      <div className="classroom-studyroom">
        <h1>스터디룸</h1>
        <div className="search-create">
          <div className="search">
            <AiOutlineSearch className="glass" />
            <input type="text" placeholder="원하는 스터디룸을 검색하세요" />
          </div>
          <div className="create-button">개설하기</div>
        </div>
        <div className="studyroom">
          <div className="open-studyroom">
            <div className="open-title">
              <MdLockOpen className="unlock-icon" />
              <div className="title-text">Open 스터디룸</div>
            </div>
            <StudyList />
          </div>
          <div className="private-studyroom">
            <div className="open-title">
              <MdLockOutline className="lock-icon" />
              <div className="title-text">Private 스터디룸</div>
            </div>
            <StudyList />
          </div>
        </div>
      </div>
    </StudyroomContainer>
  );
};

export default Study;
