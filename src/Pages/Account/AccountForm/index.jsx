import React, { useCallback, useEffect } from 'react';
import { ImFilePicture } from 'react-icons/im';
import { fetcher } from '../../../lib/api/fetcher';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import useSWR from 'swr';
import { useForm } from 'react-hook-form';

const AccountForm = () => {
  const { data: userData } = useSWR('http://localhost:4000/api/users', fetcher);
  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
  } = useForm();

  const onSubmit = useCallback((data) => {
    console.log(data);
  }, []);

  // useEffect(() => {
  //   if (profileImg) {
  //     toast('🎉 이미지를 성공적으로 첨부했습니다', {
  //       position: 'bottom-center',
  //       autoClose: 3000,
  //       hideProgressBar: false,
  //       closeOnClick: true,
  //       pauseOnHover: false,
  //       draggable: true,
  //       progress: undefined,
  //       type: 'default',
  //     });
  //   }
  // }, [profileImg]);
  return (
    <>
      <div className="account-back">
        <div className="account-title">
          <h1>계정 관리</h1>
        </div>
        <form onSubmit={handleSubmit(onSubmit)} className="account-form">
          <div className="account-padding">
            <div className="account-form-contents">
              <div className="account-form-contents-left">
                <div className="profile-back">
                  <ImFilePicture />
                </div>
                <div className="profile-filebox">
                  <label htmlFor="file">프로필 사진 변경</label>
                  <input
                    {...register('profileImg')}
                    type="file"
                    id="file"
                    accept="image/*"
                  />
                </div>
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
                  <input
                    {...register('profileText', { required: true })}
                    type="text"
                    placeholder="수정 사항을 입력해주세요"
                  />
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
      <ToastContainer />
    </>
  );
};

export default AccountForm;
