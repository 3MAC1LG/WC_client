/** @jsxImportSource @emotion/react */
import { useTheme } from '@emotion/react';
import React, { useState } from 'react';
import NextForm from './NextForm';
import { FormDark, StudyFormContainer } from './styles';

const StudyroomForm = () => {
  const theme = useTheme();
  const [page, setPage] = useState(1);

  const onPushNext = () => {
    setPage(page + 1);
  };

  return (
    <StudyFormContainer css={FormDark(theme)}>
      {/* {page == 1 && (
        <div className="form-layout">
          <div className="create-title">
            스터디룸 <span>개설</span>하기
          </div>
          <div className="create-form">
            <div className="form-padding">
              <div className="form-title">방 정보 입력</div>
              <hr />
              <form className="form-content">
                <div className="study-name">
                  <div>스터디명</div>
                  <input type="text" placeholder="스터디 명을 입력하세요." />
                </div>
                <div className="studyroom-type">
                  <div className="studyroom-type-title">스터디룸 종류</div>
                  <div className="type-check">
                    <p>
                      <input type="radio" />
                      <label>Private Room</label>
                    </p>
                    <p>
                      <input type="radio" />
                      <label>Open Room</label>
                    </p>
                  </div>
                </div>
                <div className="password">
                  <div>비밀번호</div>
                  <input type="password" placeholder="비밀번호를 입력하세요." />
                </div>
                <div className="studyroom-image">
                  <div>대표이미지 설정</div>
                  <div className="image"> </div>
                </div>
                <div className="form-button">
                  <div className="delete">취소</div>
                  <div className="next" onClick={onPushNext}>
                    다음
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      )} */}
      {/* {page == 2 && <NextForm />} */}
      <NextForm />
    </StudyFormContainer>
  );
};

export default StudyroomForm;
