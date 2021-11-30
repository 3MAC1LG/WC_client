import React from 'react';
import styled from '@emotion/styled';

const ResponsiveBlock = styled.div`
  width: 1280px;
  margin: 0 auto;
  padding: 0 1rem;
  @media screen and (min-width: 1768px) {
    width: 100%;
    padding: 0 3rem;
  }
  @media screen and (max-width: 1280px) {
    width: 1024px;
  }
  @media screen and (max-width: 1024px) {
    width: 768px;
  }
  @media screen and (max-width: 768px) {
    width: 480px;
  }
  @media screen and (max-width: 480px) {
    width: 400px;
  }
`;

const Responsive = ({ children, ...rest }) => {
  return <ResponsiveBlock {...rest}>{children}</ResponsiveBlock>;
};

export default Responsive;
