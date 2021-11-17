import React from 'react';
import Lottie from 'react-lottie';
import landing from './landing.json';

const LottieLanding = () => {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: landing,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice',
    },
  };
  return <Lottie width={'100%'} options={defaultOptions} />;
};

export default LottieLanding;
