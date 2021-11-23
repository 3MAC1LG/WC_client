import React from 'react';
import Lottie from 'react-lottie';
import notFound from './notFound.json';

const LottieNotFound = () => {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: notFound,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice',
    },
  };
  return <Lottie width={'65%'} options={defaultOptions} />;
};

export default LottieNotFound;
