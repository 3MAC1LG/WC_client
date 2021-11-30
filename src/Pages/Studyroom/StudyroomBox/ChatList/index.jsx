import React, { useCallback } from 'react';
import { ChatListContainer } from './styles';
import { Scrollbars } from 'react-custom-scrollbars-2';
import Chat from '../Chat';

const ChatList = ({
  scrollbarRef,
  isReachingEnd,
  isEmpty,
  chatSections,
  setSize,
}) => {
  const onScroll = useCallback(
    (values) => {
      if (values.scrollTop === 0 && !isReachingEnd && !isEmpty) {
        setSize((size) => size + 1).then(() => {
          scrollbarRef.current?.scrollTop(
            scrollbarRef.current?.getScrollHeight() - values.scrollHeight,
          );
        });
      }
    },
    [setSize, scrollbarRef, isReachingEnd, isEmpty],
  );
  console.log(chatSections);
  return (
    <ChatListContainer>
      <Scrollbars autoHide ref={scrollbarRef} onScrollFrame={onScroll}>
        {Object.entries(chatSections).map(([_, chats]) => {
          return chats.map((chat) => <Chat key={chat.id} data={chat} />);
        })}
      </Scrollbars>
    </ChatListContainer>
  );
};

export default React.memo(ChatList);
