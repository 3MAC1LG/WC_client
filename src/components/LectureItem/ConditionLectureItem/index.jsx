import React from 'react';
import { MdVideoLibrary } from 'react-icons/md';
import { AiOutlineClockCircle } from 'react-icons/ai';
import { MyPageContainer, SearchContainer } from './styles';

const ConditionLectureItem = ({ classroom, type }) => {
  return (
    <div>
      {type.pathname.includes('mypage') ? (
        <MyPageContainer>
          <MdVideoLibrary className="lecture-video" />
          <div>
            <AiOutlineClockCircle className="lecture-time" />
            <div className="mv-classroom">강의실로 이동</div>
          </div>
        </MyPageContainer>
      ) : (
        <SearchContainer>
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

export default ConditionLectureItem;
