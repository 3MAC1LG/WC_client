/** @jsxImportSource @emotion/react */
import { useTheme } from '@emotion/react';
import React from 'react';
import Collapse from '../../../components/Collapse';
import { NextDark, PreviewLectureList } from './styles';

const NextForm = ({ setPage, page }) => {
  const theme = useTheme();
  const onPushPrev = () => {
    setPage(page - 1);
  };
  return (
    <PreviewLectureList css={NextDark(theme)}>
      <div className="form-layout">
        <div className="create-title">
          스터디룸 <span>개설</span>하기
        </div>
        <div className="preview-box">
          <div className="preview-box-padding">
            <div className="preview-box-title">강의 선택</div>
            <hr />
            <Collapse />
          </div>
          <div className="preview-box-button">
            <div className="prev" onClick={onPushPrev}>
              이전
            </div>
            <div className="create">개설하기</div>
          </div>
        </div>
      </div>
    </PreviewLectureList>
  );
};

export default NextForm;
