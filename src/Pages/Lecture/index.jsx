import React from 'react';
import Responsive from '../../lib/styles/Responsive';
import Menu from '../../components/Menu';
import { LectureContainer } from './styles';
import LectureList from './LectureList';
import useSWR from 'swr';
import { fetcher } from '../../lib/api/fetcher';

const Lecture = () => {
  const { data: userData } = useSWR('http://localhost:4000/api/users', fetcher);
  const { data: classroomData } = useSWR(
    userData ? `http://localhost:4000/api/classrooms/:${userData.id}` : null,
    fetcher,
  );
  if (classroomData) {
    console.log(classroomData);
  }
  return (
    <LectureContainer>
      <Responsive>
        <div className="lecture">
          <Menu />
          {classroomData && (
            <LectureList classroom={classroomData.classrooms} />
          )}
        </div>
      </Responsive>
    </LectureContainer>
  );
};

export default Lecture;
