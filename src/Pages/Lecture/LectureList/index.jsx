/** @jsxImportSource @emotion/react */
import { useTheme } from '@emotion/react';
import React from 'react';
import { ContainerStyles, ListContainer, SearchBox } from './styles';
import { AiOutlineSearch } from 'react-icons/ai';
import LectureItem from '../../../components/LectureItem';
import Select from 'react-select';

const LectureList = ({ classroom }) => {
  const theme = useTheme();
  const options = [{ value: '프론트엔드', label: 'front' }];
  const customStyles = {
    container: (provided, state) => ({
      ...provided,
      borderRadius: '7rem',
    }),
  };

  if (classroom) {
    console.log(classroom);
  }
  return (
    <ListContainer css={ContainerStyles(theme)}>
      <div className="title">
        요즘 뜨고 있는 <span>개발자</span>, 나도 도전 할 수 있을까?
      </div>
      <SearchBox>
        <div className="search">
          <AiOutlineSearch className="glass" />
          <input type="text" placeholder="원하는 강의를 검색하세요" />
        </div>
        <div className="keyword">
          <Select styles={customStyles} options={options} />
        </div>
      </SearchBox>
      {classroom && (
        <div className="lecture-grid">
          {classroom.map((item, idx) => (
            <LectureItem key={idx} classroom={item} />
          ))}
        </div>
      )}
    </ListContainer>
  );
};

export default LectureList;
