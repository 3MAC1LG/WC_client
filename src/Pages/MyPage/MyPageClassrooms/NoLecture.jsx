/** @jsxImportSource @emotion/react */
import { useTheme } from '@emotion/react';
import React from 'react';
import LottieLanding from '../../../lottie/LottieLanding';
import { MyPagePtagStyles } from './styles';

const NoLecture = () => {
  const theme = useTheme();
  return (
    <>
      <div className="title">
        <h1>내 강의 목록</h1>
      </div>
      <div className="lottie">
        <LottieLanding />
      </div>
      <p css={MyPagePtagStyles(theme)}>수강중인 강의가 없습니다.</p>
    </>
  );
};

export default NoLecture;
