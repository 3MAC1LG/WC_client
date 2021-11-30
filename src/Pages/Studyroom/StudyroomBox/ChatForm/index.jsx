import React, { useCallback, useEffect, useRef } from 'react';
import { Mention } from 'react-mentions';
import {
  ChatFormArea,
  ChatFormContainer,
  MentionArea,
  MentionButton,
} from './styles';
import autosize from 'autosize';
import { RiSendPlane2Fill } from 'react-icons/ri';

const ChatFrom = ({ chat, onSubmitForm, onChangeChat }) => {
  const inputAreaRef = useRef(null);
  const onKeydown = useCallback(
    (e) => {
      if (e.key === 'Enter') {
        if (!e.shiftKey) {
          e.preventDefault();
          onSubmitForm(e);
        }
      }
    },
    [onSubmitForm],
  );

  useEffect(() => {
    if (inputAreaRef.current) {
      autosize(inputAreaRef.current);
    }
  }, []);
  return (
    <ChatFormContainer>
      <ChatFormArea onSubmit={onSubmitForm}>
        <MentionArea
          placeholder="채팅을 입력하세요"
          value={chat}
          onChange={onChangeChat}
          inputRef={inputAreaRef}
        >
          <Mention appendSpaceOnAdd />
        </MentionArea>
        <MentionButton>
          <button type="submit" className="chat-button">
            <RiSendPlane2Fill />
          </button>
        </MentionButton>
      </ChatFormArea>
    </ChatFormContainer>
  );
};

export default React.memo(ChatFrom);
