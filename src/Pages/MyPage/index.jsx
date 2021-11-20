import React from 'react';
import { MyPageContainer } from './styles';
import useSWR from 'swr';
import { fetcher } from '../../lib/api/fetcher';
import Responsive from '../../lib/styles/Responsive';
import Menu from '../../components/Menu';
import MyPageClassrooms from './MyPageClassrooms';

const MyPage = () => {
  const { data: userData } = useSWR('http://localhost:4000/api/users', fetcher);
  const { data: classroomData } = useSWR(
    userData ? `http://localhost:4000/api/classrooms/:${userData.id}` : null,
    fetcher,
  );

  if (classroomData) {
    console.log(classroomData);
  }
  return (
    <MyPageContainer>
      <Responsive>
        <div className="mypage">
          <Menu />
          <MyPageClassrooms />
        </div>
      </Responsive>
    </MyPageContainer>
  );
};

export default MyPage;
