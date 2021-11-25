/** @jsxImportSource @emotion/react */
import { useTheme } from '@emotion/react';
import React from 'react';
import LectureItem from '../../../components/LectureItem';
import NoLecture from './NoLecture';
import { MyPageClassroomsContainer, MyPagePtagStyles } from './styles';

const MyPageClassrooms = ({ classroomData }) => {
  const theme = useTheme();
  return (
    <MyPageClassroomsContainer css={MyPagePtagStyles(theme)}>
      <div className="title">
        <h1>내 강의 목록</h1>
        {!classroomData && <NoLecture />}
      </div>
      {classroomData && (
        <div className="mypage-grid">
          {classroomData?.classrooms?.map((item, idx) => (
            <LectureItem key={idx} classroom={item} />
          ))}
        </div>
      )}
    </MyPageClassroomsContainer>
  );
};

export default MyPageClassrooms;
