import React from 'react';
import styled from '@emotion/styled';

const StudyroomVideo = ({ src }) => {
  return (
    <StudyroomVideoContainer>
      <video src={src} loop={false} controls />
    </StudyroomVideoContainer>
  );
};

export default StudyroomVideo;

const StudyroomVideoContainer = styled.div`
  video {
    width: 100%;
    border-radius: 0 0 1.2rem 1.2rem;
  }
`;
