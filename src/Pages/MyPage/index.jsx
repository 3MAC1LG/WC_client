import React from 'react';
import { MyPageContainer } from './styles';
import useSWR from 'swr';
import { fetcher } from '../../lib/api/fetcher';
import Responsive from '../../lib/styles/Responsive';
import Menu from '../../components/Menu';
import MyPageClassrooms from './MyPageClassrooms';
import { get_classroom } from '../../lib/api/get_classroom';

const MyPage = () => {
  const { data: userData } = useSWR('/api/users', fetcher);
  const { data: classroomData } = useSWR(
    userData ? `/api/classrooms/user` : null,
    get_classroom,
  );
  return (
    <MyPageContainer>
      <Responsive>
        <div className="mypage">
          <Menu />
          <MyPageClassrooms classroomData={classroomData?.data} />
        </div>
      </Responsive>
    </MyPageContainer>
  );
};

export default MyPage;
