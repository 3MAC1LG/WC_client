/** @jsxImportSource @emotion/react */
import { useTheme } from '@emotion/react';
import React from 'react';
import {
  ClassroomDetailContainer,
  ClassroomDetailContainerStyles,
  Split,
} from './styles';
import Collapse from '../../../components/Collapse';
import useSWR from 'swr';
import { fetcher } from '../../../lib/api/fetcher';
import { useParams } from 'react-router';
import Button from '../../../components/Button';

const ClassroomDetail = () => {
  const { classroomId } = useParams();
  const { data: userData } = useSWR('/api/users', fetcher);
  const { data: sectionData } = useSWR(
    userData ? `/api/sections/${classroomId}` : null,
    fetcher,
  );
  const theme = useTheme();
  let sum = 0;
  return (
    <ClassroomDetailContainer css={ClassroomDetailContainerStyles(theme)}>
      <div className="classroom-padding">
        <div className="classroom-contents">
          <div className="classroom-contents-title">
            <p>프론트엔드</p>
            <h1>기초부터 탄탄하게 React</h1>
          </div>
          <div className="classroom-contents-grid">
            <div className="video-desc">
              <div className="classroom-video"></div>
              <div className="lecture-info">
                <div>
                  강의 개수{' '}
                  {sectionData?.data
                    ?.map((section) => sum + section.Videos.length)
                    .reduce((a, b) => a + b, 0) || 0}
                </div>
                <div>학습 시간</div>
              </div>
            </div>
            {sectionData?.data && <Collapse data={sectionData.data} />}
          </div>
        </div>
        <Split />
        <div className="classroom-studyroom">
          <div className="studyroom-title">
            <h1>스터디룸</h1>
            <Button text="개설하기" />
          </div>
        </div>
      </div>
    </ClassroomDetailContainer>
  );
};

export default ClassroomDetail;
