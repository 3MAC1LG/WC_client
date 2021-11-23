import React from 'react';
import Lottie from 'react-lottie';
import notLogin from './notLogin.json';

const LottieNotLogin = () => {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: notLogin,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice',
    },
  };
  return <Lottie width={'65%'} options={defaultOptions} />;
};

export default LottieNotLogin;
