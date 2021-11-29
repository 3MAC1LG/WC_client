/** @jsxImportSource @emotion/react */
import React, { useCallback } from 'react';
import { useTheme } from '@emotion/react';
import {
  StudyroomContainer,
  StudyroomHeader,
  StudyroomHeaderStyles,
} from './styles';
import Responsive from '../../lib/styles/Responsive';
import useSWR from 'swr';
import { useParams, withRouter } from 'react-router';
import { fetcher } from '../../lib/api/fetcher';
import StudyroomVideo from './StudyroomVideo';
import StudyroomBox from './StudyroomBox';

const Studyroom = ({ history }) => {
  const { studyroomId } = useParams();
  const { data: studyroomData } = useSWR(
    `/api/studyrooms/${studyroomId}/studyroom`,
    fetcher,
  );
  const { data: studyroomMemberData } = useSWR(
    `/api/studyrooms/${studyroomId}/members`,
    fetcher,
  );
  const theme = useTheme();
  console.log(studyroomData);
  const onQuit = useCallback(() => {
    history.push('/');
  }, [history]);
  return (
    <StudyroomContainer>
      <StudyroomHeader css={StudyroomHeaderStyles(theme)}>
        <Responsive>
          <div className="studyroom-header">
            <h1 className="studyroom-header-quit">나가기</h1>
            <h1 className="studyroom-header-title">
              [ {studyroomData?.data[0]?.title} ]
            </h1>
          </div>
        </Responsive>
      </StudyroomHeader>
      <Responsive>
        <div className="studyroom-grid">
          <StudyroomVideo src={studyroomData?.data[0]?.Video?.videoUrl} />
          <StudyroomBox />
        </div>
      </Responsive>
    </StudyroomContainer>
  );
};

export default React.memo(withRouter(Studyroom));
