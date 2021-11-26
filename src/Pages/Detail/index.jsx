import React from 'react';
import useSWR from 'swr';
import Menu from '../../components/Menu';
import Responsive from '../../lib/styles/Responsive';
import DetailItem from './DetailItem';
import { DetailContainer } from './styles';
import { fetcher } from '../../lib/api/fetcher';
import { useParams } from 'react-router';

const Detail = () => {
  const { classroomId } = useParams();
  const { data: classroomData } = useSWR(
    `/api/classrooms/${classroomId}`,
    fetcher,
  );
  return (
    <DetailContainer>
      <Responsive>
        <div className="detail">
          <Menu />
          {classroomData?.data && (
            <DetailItem classroomData={classroomData.data} />
          )}
        </div>
      </Responsive>
    </DetailContainer>
  );
};

export default Detail;
