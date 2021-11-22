import React from 'react';
import Menu from '../../components/Menu';
import Responsive from '../../lib/styles/Responsive';
import ClassroomDetail from './ClassroomDetail';
import { ClassroomContainer } from './styles';

const Classroom = () => {
  return (
    <ClassroomContainer>
      <Responsive>
        <div className="classroom">
          <Menu />
          <ClassroomDetail />
        </div>
      </Responsive>
    </ClassroomContainer>
  );
};

export default Classroom;
