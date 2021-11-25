/** @jsxImportSource @emotion/react */
import React, { useEffect, useState } from 'react';
import Responsive from '../../lib/styles/Responsive';
import Menu from '../../components/Menu';
import { LectureContainer } from './styles';
import LectureList from './LectureList';
import useSWR from 'swr';
import { fetcher } from '../../lib/api/fetcher';
import { useLocation, useParams } from 'react-router';
import qs from 'qs';
import Pagination from '../../components/Pagination';

const Lecture = () => {
  const { search } = useLocation();
  const { category } = useParams();
  const query = qs.parse(search, { ignoreQueryPrefix: true });
  const page = parseInt(query.page) || 1;
  const { data: classroomData, mutate } = useSWR(
    `http://localhost:4000/api/classrooms?category=${category.slice(
      1,
    )}&page=${page}`,
    fetcher,
  );
  const size = Math.ceil(classroomData?.data[1] / 8);

  useEffect(() => {
    mutate();
  }, []);
  return (
    <LectureContainer>
      <Responsive>
        <div className="lecture">
          <Menu />
          {classroomData && (
            <div className="lecture-layout">
              <LectureList classroom={classroomData.data[0]} />
              <Pagination page={page} category={category} size={size} />
            </div>
          )}
        </div>
      </Responsive>
    </LectureContainer>
  );
};

export default Lecture;
