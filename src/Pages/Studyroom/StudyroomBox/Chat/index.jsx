import React, { memo, useMemo } from 'react';
import styled from '@emotion/styled';
import regexifyString from 'regexify-string';
import { BiUser } from 'react-icons/bi';

const Chat = memo(({ data }) => {
  const result = useMemo(
    () =>
      regexifyString({
        input: data.content,
        pattern: /@\[(.+?)]\((\d+?)\)|\n/g,
        decorator(match, index) {
          const arr = match.match(/@\[(.+?)]\((\d+?)\)/);
          if (arr) {
            return (
              <Link
                key={match + index}
                to={`/workspace/${workspace}/dm/${arr[2]}`}
              >
                @{arr[1]}
              </Link>
            );
          }
          return <br key={index} />;
        },
      }),
    [data.content],
  );
  return (
    <ChatContainer>
      <div className="chat-user">
        {data.User.profileImg ? (
          <div className="chat-user-img">
            <img src={`/${data.User.profileImg}`} alt="profile" />
          </div>
        ) : (
          <div className="chat-user-noImg">
            <BiUser />
          </div>
        )}
        <span>{data.User.email}</span>
      </div>
      <div className="chat-content">
        <p>{result}</p>
      </div>
    </ChatContainer>
  );
});

export default Chat;

const ChatContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 1rem;
  margin-bottom: 1rem;
  margin-left: 1rem;
  margin-right: 2rem;
  .chat-user {
    display: flex;
    align-items: center;
    justify-content: flex-start;
    .chat-user-img {
      display: flex;
      align-items: center;
      justify-content: center;
      width: 2.5rem;
      height: 2.5rem;
      border-radius: 1.25rem;
      img {
        width: 100%;
      }
    }
    .chat-user-noImg {
      display: flex;
      align-items: center;
      justify-content: center;
      background: #fff;
      width: 2.5rem;
      height: 2.5rem;
      border-radius: 1.25rem;
      svg {
        width: 100%;
        font-size: 1.75rem;
      }
    }
    span {
      font-weight: bold;
      padding-left: 0.5rem;
    }
  }

  .chat-content {
    margin-top: 1rem;
    width: 100%;
    background: #fff;
    padding: 1rem;
    border-radius: 1.75rem;
    p {
    }
  }
`;
