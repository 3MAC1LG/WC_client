import React from 'react';
import styled from '@emotion/styled';
import { useLocation } from 'react-router';
import useDarkMode from 'use-dark-mode';

const FixedCircleContainer = styled.div`
  position: fixed;
  bottom: -6rem;
  left: -6rem;
  width: 32rem;
  img {
    width: 100%;
  }
`;

const FixedCircle = () => {
  const { pathname } = useLocation();
  const darkMode = useDarkMode(false);
  if (pathname === '/landing') {
    return null;
  }
  return (
    <FixedCircleContainer>
      {darkMode.value ? (
        <img
          src="/assets/images/fixedCircleDark.png"
          alt="fixedCircleDark.png"
        />
      ) : (
        <img src="/assets/images/fixedCircle.png" alt="fixedCircle.png" />
      )}
    </FixedCircleContainer>
  );
};

export default FixedCircle;
