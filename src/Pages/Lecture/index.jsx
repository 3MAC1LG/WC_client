import React from 'react';
import Responsive from '../../lib/styles/Responsive';
import Menu from '../../components/Menu';
import { LectureContainer } from './styles';
import LectureList from './LectureList';

const Lecture = () => {
  return (
    <LectureContainer>
      <Responsive>
        <div className="lecture">
          <Menu />
          <LectureList />
        </div>
      </Responsive>
    </LectureContainer>
  );
};

export default Lecture;
