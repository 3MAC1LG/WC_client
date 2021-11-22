/** @jsxImportSource @emotion/react */
import { useTheme } from '@emotion/react';
import React from 'react';
import NoLecture from './NoLecture';
import { MyPageClassroomsContainer, MyPagePtagStyles } from './styles';

const MyPageClassrooms = ({ classroomData }) => {
  const theme = useTheme();
  return (
    <MyPageClassroomsContainer css={MyPagePtagStyles(theme)}>
      <div className="title">
        <h1>내 강의 목록</h1>
        {!classroomData && <NoLecture />}
        {classroomData && (
          <div className="mypage-thumb">
            <img
              src={`http://localhost:4000/${classroomData.classrooms[0].thumbUrl}`}
              alt=""
            />
          </div>
        )}
      </div>
    </MyPageClassroomsContainer>
  );
};

export default MyPageClassrooms;
