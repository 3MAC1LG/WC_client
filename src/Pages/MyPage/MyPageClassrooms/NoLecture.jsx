import React from 'react';
import LottieLanding from '../../../lottie/LottieLanding';

const NoLecture = () => {
  return (
    <>
      <div className="lottie">
        <LottieLanding />
      </div>
      <p>수강중인 강의가 없습니다.</p>
      <button>강의 찾기</button>
    </>
  );
};

export default NoLecture;
