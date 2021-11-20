import React from 'react';
import { AccountContainer } from './styles';
import useSWR from 'swr';

const Accout = () => {
  // const {} = useSWR(`http://localhost:4000/api/classrooms/:${}`)
  return (
    <AccountContainer>
      <h1>Acccount</h1>
    </AccountContainer>
  );
};

export default Accout;
