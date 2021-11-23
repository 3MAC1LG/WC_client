import React from 'react';
import { Button } from './styles';
import { BsFillChatFill } from 'react-icons/bs';
const KakaoLogin = () => {
  return (
    <a href="http://localhost:4000/oauth/kakao">
      <Button>
        <div className="box">
          <BsFillChatFill className="symbol" />
          <div className="label">카카오 로그인</div>
        </div>
      </Button>
    </a>
  );
};

export default KakaoLogin;
