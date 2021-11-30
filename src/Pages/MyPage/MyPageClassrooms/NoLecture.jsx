import React, { useCallback } from 'react';
import { withRouter } from 'react-router';
import Button from '../../../components/Button';
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
      <Button text="로그인하러가기" />
    </div>
  );
};

export default withRouter(NoLecture);
