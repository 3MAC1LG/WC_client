/** @jsxImportSource @emotion/react */
import React, { useCallback, useRef, useEffect } from 'react';
import { useTheme } from '@emotion/react';
import {
  StudyroomContainer,
  StudyroomHeader,
  StudyroomHeaderStyles,
  StudyroomVideoTitle,
} from './styles';
import Responsive from '../../lib/styles/Responsive';
import useSWR from 'swr';
import useSWRInfinite from 'swr/infinite';
import { useParams, withRouter } from 'react-router';
import { fetcher } from '../../lib/api/fetcher';
import StudyroomVideo from './StudyroomVideo';
import StudyroomBox from './StudyroomBox';
import useSocket from '../../hooks/useSocket';
import useInput from '../../hooks/useInput';
import axios from 'axios';
import makeSection from '../../lib/api/makeSection';

const SIZE = 5;
const Studyroom = ({ history }) => {
  const { classroomId, studyroomId } = useParams();
  const [socket] = useSocket(classroomId.slice(1));
  const { data: userData } = useSWR(`/api/users`, fetcher);
  const { data: studyroomData } = useSWR(
    `/api/studyrooms/${studyroomId}/studyroom`,
    fetcher,
  );
  const { data: studyroomMemberData } = useSWR(
    `/api/studyrooms/${studyroomId}/members`,
    fetcher,
  );
  const {
    data: chatData,
    mutate: mutateChat,
    setSize,
  } = useSWRInfinite(
    (index) =>
      `/api/studyrooms/${studyroomId}/chats?perPage=${SIZE}&page=${index + 1}`,
    fetcher,
    {
      onSuccess(data) {
        if (data.length === 1) {
          setTimeout(() => {
            scrollbarRef.current?.scrollToBottom();
          }, 100);
        }
      },
    },
  );

  const [chat, onChangeChat, setChat] = useInput();
  const scrollbarRef = useRef(null);
  const theme = useTheme();
  const isEmpty = chatData?.[0]?.length === 0;
  const isReachingEnd =
    isEmpty || (chatData && chatData[chatData.length - 1]?.length < SIZE);

  const onQuit = useCallback(() => {
    history.push('/');
  }, [history]);

  const onSubmitForm = useCallback(
    (e) => {
      e.preventDefault();
      if (chat?.trim() && chatData && studyroomData?.data[0] && userData) {
        const savedChat = chat;
        mutateChat((prevChatData) => {
          prevChatData?.[0].unshift({
            id: (chatData[0][0]?.id || 0) + 1,
            content: savedChat,
            UserId: userData.id,
            User: userData,
            ChannelId: studyroomData?.data[0].id,
            Channel: studyroomData?.data[0],
            createdAt: new Date(),
          });
          return prevChatData;
        }, false).then(() => {
          localStorage.setItem(
            `${classroomId.slice(1)}-${studyroomId.slice(1)}`,
            new Date().getTime().toString(),
          );
          setChat('');
          if (scrollbarRef.current) {
            console.log('scrollToBottom!', scrollbarRef.current?.getValues());
            scrollbarRef.current.scrollToBottom();
          }
        });
        axios
          .post(
            `/api/studyrooms/${studyroomId}/chats`,
            {
              content: savedChat,
            },
            { withCredentials: true },
          )
          .then(() => mutateChat())
          .catch(console.error);
      }
    },
    [
      chat,
      classroomId,
      studyroomId,
      studyroomData,
      userData,
      chatData,
      mutateChat,
      setChat,
    ],
  );

  const onMessage = useCallback(
    (data) => {
      if (
        data.StudyroomId === parseInt(studyroomId.slice(1)) &&
        (data.content.startsWith('uploads\\') ||
          data.content.startsWith('uploads/') ||
          data.UserId !== userData?.id)
      ) {
        mutateChat((chatData) => {
          chatData?.[0].unshift(data);
          return chatData;
        }, false).then(() => {
          if (scrollbarRef.current) {
            if (
              scrollbarRef.current.getScrollHeight() <
              scrollbarRef.current.getClientHeight() +
                scrollbarRef.current.getScrollTop() +
                150
            ) {
              setTimeout(() => {
                scrollbarRef.current?.scrollToBottom();
              }, 100);
            } else {
              toast.success('새 메시지가 도착했습니다.', {
                onClick() {
                  scrollbarRef.current?.scrollToBottom();
                },
                closeOnClick: true,
              });
            }
          }
        });
      }
    },
    [studyroomId, userData, mutateChat],
  );

  useEffect(() => {
    socket?.on('message', onMessage);
    return () => {
      socket?.off('message', onMessage);
    };
  }, [socket, onMessage]);

  useEffect(() => {
    localStorage.setItem(
      `${classroomId.slice(1)}-${studyroomId.slice(1)}`,
      new Date().getTime().toString(),
    );
  }, [classroomId, studyroomId]);

  const chatSections = makeSection(
    chatData ? [].concat(...chatData).reverse() : [],
  );

  console.log(chatData);

  return (
    <StudyroomContainer>
      <StudyroomHeader css={StudyroomHeaderStyles(theme)}>
        <Responsive>
          <div className="studyroom-header">
            <h1 className="studyroom-header-quit" onClick={onQuit}>
              나가기
            </h1>
            <h1 className="studyroom-header-title">
              [ {studyroomData?.data[0]?.title} ]
            </h1>
          </div>
        </Responsive>
      </StudyroomHeader>
      <Responsive>
        <div className="studyroom-grid">
          <StudyroomVideo src={studyroomData?.data[0]?.Video?.videoUrl} />
          <StudyroomBox
            chat={chat}
            chatSections={chatSections}
            onSubmitForm={onSubmitForm}
            onChangeChat={onChangeChat}
            isReachingEnd={isReachingEnd}
            scrollToBottom={scrollbarRef}
            isEmpty={isEmpty}
            setSize={setSize}
            member={studyroomMemberData?.data}
          />
        </div>
      </Responsive>
      <Responsive>
        <StudyroomVideoTitle>
          <span># {studyroomData?.data[0]?.Classroom?.category}</span>
          <p>{studyroomData?.data[0]?.Video?.title}</p>
        </StudyroomVideoTitle>
      </Responsive>
    </StudyroomContainer>
  );
};

export default React.memo(withRouter(Studyroom));
