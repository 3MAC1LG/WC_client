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
      </div>
      {classroomData?.length > 0 ? (
        <div className="mypage-grid">
          {classroomData.map((classroom, idx) => (
            <LectureItem key={idx} classroom={classroom.Classroom} />
          ))}
        </div>
      ) : (
        <NoLecture />
      )}
    </MyPageClassroomsContainer>
  );
};

export default React.memo(MyPageClassrooms);
