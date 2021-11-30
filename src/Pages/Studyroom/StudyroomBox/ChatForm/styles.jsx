import styled from '@emotion/styled';
import { MentionsInput } from 'react-mentions';

export const ChatFormContainer = styled.div``;

export const ChatFormArea = styled.form`
  display: flex;
  align-items: center;
  background: #fff;
  border-radius: 0 0 1.5rem 1.5rem;
`;

export const MentionArea = styled(MentionsInput)`
  flex: 1;
  font-family: 'Gmaket Sans', appleLogo, sans-serif;
  font-size: 1.5rem;
  padding: 8px 9px;
  & strong {
    background: skyblue;
  }
  & textarea {
    height: 44px;
    padding: 9px 10px !important;
    outline: none !important;
    border-radius: 4px !important;
    resize: none !important;
    line-height: 22px;
    border: none;
  }
  & ul {
    border: 1px solid lightgray;
    max-height: 200px;
    overflow-y: auto;
    padding: 9px 10px;
    background: white;
    border-radius: 4px;
    width: 150px;
  }
`;

export const MentionButton = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding-right: 1rem;
  .chat-button {
    display: flex;
    align-items: center;
    justify-content: center;
    outline: none;
    border: none;
    background: none;
    cursor: pointer;
    svg {
      font-size: 1.75rem;
      width: 100%;
    }
  }
`;
