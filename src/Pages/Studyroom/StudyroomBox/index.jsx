import React, { useState } from 'react';
import styled from '@emotion/styled';
import Menu, { MenuItem } from 'rc-menu';
import 'rc-menu/assets/index.css';
import ChatFrom from './ChatForm';
import ChatList from './ChatList';
import StudyroomWebcam from './StudyroomWebcam';

const StudyroomBox = ({
  chat,
  onChangeChat,
  onSubmitForm,
  scrollbarRef,
  isReachingEnd,
  isEmpty,
  setSize,
  chatSections,
  member,
}) => {
  const [page, setPage] = useState('1');
  return (
    <StudyroomBoxContainer>
      <div className="box-nav">
        <Menu
          defaultSelectedKeys={['1']}
          mode="horizontal"
          onClick={({ key }) => {
            setPage(key);
          }}
          className="box-menu-item"
          overflowedIndicator={false}
          forceSubMenuRender={false}
        >
          <MenuItem key="1">채팅</MenuItem>
          <MenuItem key="2">참여자</MenuItem>
          <MenuItem key="3">Q&A</MenuItem>
        </Menu>
      </div>
      <div className="box-menu-contents">
        {page === '1' && (
          <>
            <ChatList
              scrollbarRef={scrollbarRef}
              isReachingEnd={isReachingEnd}
              isEmpty={isEmpty}
              setSize={setSize}
              chatSections={chatSections}
            />
            <ChatFrom
              chat={chat}
              onChangeChat={onChangeChat}
              onSubmitForm={onSubmitForm}
            />
          </>
        )}
        {page === '2' && <StudyroomWebcam member={member} />}
        {page === '3' && <h1>QnA</h1>}
      </div>
    </StudyroomBoxContainer>
  );
};

export default React.memo(StudyroomBox);

const StudyroomBoxContainer = styled.div`
  .box-menu-item {
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    background: #fff;
    border: none;
    color: #17090e;
    padding: 1rem 2rem;
    border-radius: 1.5rem 1.5rem 0 0;
  }

  .rc-menu-item {
    font-size: 1rem;
    cursor: pointer;
  }

  .rc-menu-item-selected {
    background-color: #eceef6;
    color: #17090e;
    transform: translateZ(0);
    border-radius: 2rem;
    padding: 1rem 2rem;
  }

  .rc-menu-item-active {
    color: #17090e;
    border: none;
    padding: 1rem 2rem;
    border-radius: 2rem;
  }

  .box-menu-contents {
    height: calc(100% - 6.3rem);
    background: #eceef6;
    display: flex;
    flex-direction: column;
    border-radius: 0 0 1.5rem 1.5rem;
  }
`;
