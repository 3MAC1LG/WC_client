import React from 'react';
import { AccountContainer } from './styles';
import useSWR from 'swr';
import Responsive from '../../lib/styles/Responsive';
import Menu from '../../components/Menu';

const Accout = () => {
  // const {} = useSWR(`http://localhost:4000/api/classrooms/:${}`)
  return (
    <AccountContainer>
      <Responsive>
        <div className="account">
          <Menu />
        </div>
      </Responsive>
    </AccountContainer>
  );
};

export default Accout;
