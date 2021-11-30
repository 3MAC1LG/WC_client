/** @jsxImportSource @emotion/react */
import { useTheme } from '@emotion/react';
import React, { useCallback, useEffect, useState } from 'react';
import NextForm from './NextForm';
import { FormDark, StudyFormContainer } from './styles';
import { useForm } from 'react-hook-form';
import { Split } from '../Classroom/ClassroomDetail/styles';
import { withRouter } from 'react-router';
import { useDispatch, useSelector } from 'react-redux';
import { add_studyroomFormPagePrev } from '../../reducers/studyroomSlice';

const StudyroomForm = ({ history }) => {
  const studyroomFormPagePrev = useSelector(
    (state) => state.studyrooms.studyroomFormPagePrev,
  );
  const dispatch = useDispatch();
  const {
    register,
    formState: { errors },
    handleSubmit,
    reset,
  } = useForm();
  const theme = useTheme();
  const [page, setPage] = useState(1);

  const onPushNext = (data) => {
    dispatch(add_studyroomFormPagePrev(data));
    setPage((prev) => prev + 1);
    reset({
      name: '',
      password: '',
    });
  };

  const onPageReset = useCallback(() => {
    setPage(1);
  }, [setPage]);

  const onCancle = useCallback(() => {
    history.goBack();
  }, [history]);

  useEffect(() => {
    return () =>
      reset({
        name: '',
        password: '',
      });
  }, [reset]);
  return (
    <StudyFormContainer css={FormDark(theme)}>
      {page == 1 && (
        <div className="form-layout">
          <div className="create-title">
            스터디룸 <span>개설</span>하기
          </div>
          <div className="create-form">
            <div className="form-padding">
              <div className="form-title">방 정보 입력</div>
              <form className="form-content">
                <div className="study-name">
                  <div>스터디명</div>
                  <input
                    type="text"
                    placeholder="스터디 명을 입력하세요."
                    {...register('name', { required: true })}
                  />
                </div>
                <div className="studyroom-type">
                  <div className="studyroom-type-title">스터디룸 종류</div>
                  <div className="type-check">
                    <p>
                      <input
                        type="radio"
                        value={true}
                        {...register('private', { required: true })}
                      />
                      <label>Private Room</label>
                    </p>
                    <p>
                      <input
                        type="radio"
                        value={false}
                        {...register('private', { required: true })}
                      />
                      <label>Open Room</label>
                    </p>
                  </div>
                </div>
                <div className="password">
                  <div>비밀번호</div>
                  <input
                    type="password"
                    placeholder="비밀번호를 입력하세요."
                    {...register('password')}
                  />
                </div>
                <div className="studyroom-image">
                  <div>대표이미지 설정</div>
                  <div className="image"> </div>
                </div>
                <div className="form-button">
                  <div onClick={onCancle} className="delete">
                    취소
                  </div>
                  <div className="next" onClick={handleSubmit(onPushNext)}>
                    다음
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      )}
      {page == 2 && <NextForm setPage={setPage} page={page} />}
    </StudyFormContainer>
  );
};

export default React.memo(withRouter(StudyroomForm));
