/** @jsxImportSource @emotion/react */
import { useTheme } from '@emotion/react';
import React from 'react';
import Button from '../../../components/Button';
import { DetailContainerStyles, DetailItemContainer } from './styles';

const DetailItem = ({ classroomData }) => {
  const theme = useTheme();
  console.log(classroomData);
  return (
    <DetailItemContainer css={DetailContainerStyles(theme)}>
      <div className="detail-padding">
        <div className="detail-intro">
          <div className="detail-intro-left">
            <p>{classroomData.category}</p>
            <h1>{classroomData.name}</h1>
            <p className="detail-desc">{classroomData.desc}</p>
          </div>
          <div className="detail-intro-right">
            <img src={`/${classroomData.classroomImg}`} alt="classThumb.png" />
          </div>
        </div>
        <div className="detail-info">
          <div className="detail-info-left">
            <p>
              수강인원{' '}
              <span>{`${classroomData.ClassroomMembers.length}`}명</span>
            </p>
            <p>
              강의 <span>총 00개의 강의</span>
            </p>
          </div>
          <div className="detail-info-right">
            <Button text="학습하기" />
          </div>
        </div>
      </div>
    </DetailItemContainer>
  );
};

export default DetailItem;
