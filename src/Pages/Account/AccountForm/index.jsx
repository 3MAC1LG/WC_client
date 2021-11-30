import React, { useCallback, useState, useEffect } from 'react';
import { ImFilePicture } from 'react-icons/im';
import { fetcher } from '../../../lib/api/fetcher';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import useSWR from 'swr';
import axios from 'axios';
import { useForm } from 'react-hook-form';

const AccountForm = () => {
  const {
    register,
    formState: { errors },
    reset,
    handleSubmit,
  } = useForm();
  const { data: userData, mutate } = useSWR('/api/users', fetcher);
  const [profile, setProfile] = useState(null);
  const [img, setImg] = useState(null);
  const [nicknName, setNickName] = useState(
    userData?.nicknName ? userData.nickname : '',
  );

  const onSubmit = useCallback(async (data) => {
    const { file } = data;
    const formData = new FormData();
    formData.append('file', file[0]);

    await axios
      .post('/api/users/upload', formData, {
        withCredentials: true,
      })
      .then((res) => {
        setProfile(res.data);
        mutate();
      })
      .catch((e) => console.error(e));
  }, []);

  useEffect(() => {
    if (profile) {
      toast('🎉 프로필을 수정했습니다', {
        position: 'bottom-center',
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: false,
        draggable: true,
        progress: undefined,
        type: 'default',
      });
    }
  }, [profile]);

  useEffect(async () => {
    if (img) {
      const formData = new FormData();
      formData.append('file', img);

      await axios
        .post('/api/users/upload', formData, {
          withCredentials: true,
        })
        .then((res) => {
          setProfile(res.data);
          mutate();
        })
        .catch((e) => console.error(e));
    }
  }, [img]);
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
                {userData?.profileImg ? (
                  <div className="profile-userBack">
                    <div className="profile-userBack-inner">
                      <img src={`/${userData.profileImg}`} alt="profile" />
                    </div>
                  </div>
                ) : (
                  <div className="profile-back">
                    <ImFilePicture />
                  </div>
                )}
                <div className="profile-filebox">
                  <label htmlFor="file">프로필 사진 변경</label>
                  <input
                    {...register('file')}
                    onChange={(e) => setImg(e.target.files[0])}
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
                    {...register('nickname')}
                    type="text"
                    placeholder="수정 사항을 입력해주세요"
                    defaultValue={userData?.nickname}
                  />
                </div>
              </div>
            </div>
            <div className="account-form-button">
              <div className="button-box">
                <button onClick={handleSubmit(onSubmit)}>계정 수정</button>
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
