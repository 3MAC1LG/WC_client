import React from 'react';
import { ListContainer, SearchBox } from './styles';
import { AiOutlineSearch } from 'react-icons/ai';
import LectureItem from '../../../components/LectureItem';
const LectureList = () => {
  return (
    <ListContainer>
      <div className="title">
        요즘 뜨고 있는 <span>개발자</span>, 나도 도전 할 수 있을까?
      </div>
      <SearchBox>
        <div className="search">
          <AiOutlineSearch className="glass" />
          <input type="text" placeholder="원하는 강의를 검색하세요" />
        </div>
        <div className="keyword">
          <select name="keyword">
            <option value="1" selected>
              키워드 찾기
            </option>
          </select>
        </div>
      </SearchBox>
      <LectureItem />
    </ListContainer>
  );
};

export default LectureList;
