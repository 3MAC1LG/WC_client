import React from 'react';
import { ImFilePicture } from 'react-icons/im';
import { fetcher } from '../../../lib/api/fetcher';
import useSWR from 'swr';

const AccountForm = () => {
  const { data: userData } = useSWR('http://localhost:4000/api/users', fetcher);
  return (
    <div className="account-back">
      <div className="account-title">
        <h1>계정 관리</h1>
      </div>
      <form className="account-form">
        <div className="account-padding">
          <div className="account-form-contents">
            <div className="account-form-contents-left">
              <div className="profile-back">
                <ImFilePicture />
              </div>
              <p>프로필 사진 변경</p>
            </div>
            <div className="account-form-contents-right">
              <div className="account-input">
                <label>이메일</label>
                <input
                  type="text"
                  placeholder="수정 사항을 입력해주세요"
                  defaultValue={userData?.email}
                />
              </div>
              <div className="account-input">
                <label>닉네임</label>
                <input type="text" placeholder="수정 사항을 입력해주세요" />
              </div>
            </div>
          </div>
          <div className="account-form-button">
            <div className="button-box">
              <button>계정 수정</button>
              <button>회원 탈퇴</button>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

export default AccountForm;
