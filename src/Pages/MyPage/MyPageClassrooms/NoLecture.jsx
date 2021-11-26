import React, { useCallback } from 'react';
import { withRouter } from 'react-router';
import LottieLanding from '../../../lottie/LottieLanding';

const NoLecture = ({ history }) => {
  const onPush = useCallback(() => {
    history.push('/lecture/:all?page=1');
  }, [history]);
  return (
    <div className="no-lecture">
      <div className="lottie">
        <LottieLanding />
      </div>
      <p>수강중인 강의가 없습니다.</p>
      <button onClick={onPush}>강의 찾기</button>
    </div>
  );
};

export default withRouter(NoLecture);
