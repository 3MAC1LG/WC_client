import React from 'react';
import Lottie from 'react-lottie';
import lecture from './lecture.json';

const LottieLecture = () => {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: lecture,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice',
    },
  };
  return <Lottie width={'100%'} options={defaultOptions} />;
};

export default LottieLecture;
