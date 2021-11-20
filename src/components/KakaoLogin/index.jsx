import React from 'react';
import { Button } from './styles';
import { BsFillChatFill } from 'react-icons/bs';
const KakaoLogin = () => {
  return (
    <Button>
      <div className="box">
        <BsFillChatFill className="symbol" />
        <div className="label">카카오 로그인</div>
      </div>
    </Button>
  );
};

export default KakaoLogin;
