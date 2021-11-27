import React from 'react';
import Collapse from '../../../components/Collapse';
import { PreviewLectureList } from './styles';

const NextForm = () => {
  return (
    <PreviewLectureList>
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
        </div>
      </div>
    </PreviewLectureList>
  );
};

export default NextForm;
