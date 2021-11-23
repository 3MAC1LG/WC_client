/** @jsxImportSource @emotion/react */
import { useTheme } from '@emotion/react';
import React from 'react';
import {
  ClassroomDetailContainer,
  ClassroomDetailContainerStyles,
  StudyroomStyles,
} from './styles';
import { AiOutlineSearch } from 'react-icons/ai';
import { MdLockOpen } from 'react-icons/md';
import { FaUser } from 'react-icons/fa';

const ClassroomDetail = () => {
  const theme = useTheme();
  return (
    <ClassroomDetailContainer css={ClassroomDetailContainerStyles(theme)}>
      <div className="classroom-padding">
        <div className="classroom-contents">
          <div className="classroom-contents-title">
            <p>프론트엔드</p>
            <h1>기초부터 탄탄하게 React</h1>
          </div>
          <div className="classroom-contents-grid">
            <div className="video-desc">
              <div className="classroom-video"></div>
              <div className="lecture-info">
                <div>강의 개수</div>
                <div>학습 시간</div>
              </div>
            </div>
            <div className="classroom-section">
              <div className="per-section">
                <div>섹션 1.리액트의 기초</div>
                <div>리액트 시작</div>
                <div>JSX</div>
                <div>컴포넌트</div>
              </div>
              <div className="per-section">
                <div>섹션 1.리액트의 기초</div>
                <div>리액트 시작</div>
                <div>JSX</div>
                <div>컴포넌트</div>
              </div>
              <div className="per-section">
                <div>섹션 1.리액트의 기초</div>
                <div>리액트 시작</div>
                <div>JSX</div>
                <div>컴포넌트</div>
              </div>
            </div>
          </div>
        </div>
        <hr />
        <div className="classroom-studyroom" css={StudyroomStyles(theme)}>
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
                <MdLockOpen />
                <div className="title-text">Open 스터디룸</div>
              </div>
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
            </div>
            <div className="private-studyroom"></div>
          </div>
        </div>
        <div className="classroom-qna"></div>
      </div>
    </ClassroomDetailContainer>
  );
};

export default ClassroomDetail;
