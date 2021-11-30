import React, { useRef, useState } from 'react';
import styled from '@emotion/styled';
import { BiUser } from 'react-icons/bi';

const StudyroomWebcam = ({ member }) => {
  console.log(member);
  return (
    member &&
    member.map((pp) => (
      <MemberContainer key={pp.UserId}>
        <div className="pp-padding">
          {pp.User.profileImg ? (
            <div className="users-profile">
              <img src={`/${pp.User?.profileImg}`} alt="profile" />
            </div>
          ) : (
            <div className="users-noProfile">
              <BiUser />
            </div>
          )}
          <h1>{pp.User.email}</h1>
        </div>
      </MemberContainer>
    ))
  );
};

export default React.memo(StudyroomWebcam);

const MemberContainer = styled.div`
  width: 100%;
  .pp-padding {
    margin: 1rem;
    padding: 1rem;
    background: #fff;
    border-radius: 2rem;
    display: flex;
    align-items: center;
    justify-content: center;
    .users-profile {
      width: 2rem;
      height: 2rem;
      img {
        width: 100%;
      }
    }
    .users-noProfile {
      width: 2rem;
      height: 2rem;
      display: flex;
      align-items: center;
      justify-content: center;
      svg {
        width: 100%;
        font-size: 1.75rem;
      }
    }
    h1 {
      padding-left: 1rem;
    }
  }
`;
