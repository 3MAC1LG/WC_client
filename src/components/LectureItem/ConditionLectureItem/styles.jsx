import styled from '@emotion/styled';

export const SearchContainer = styled.div`
  .study-info {
    display: flex;
    flex-direction: column;
    margin-top: 5rem;

    .lecture-video {
      font-size: 3rem;
      color: #8a85ec;
      margin-bottom: 1rem;
    }
    .lecture-time {
      font-size: 3rem;
      color: #8a85ec;
      margin-bottom: 10rem;
    }
  }
  .class-desc {
    font-size: 1.9rem;
    overflow: hidden;
    text-overflow: hidden;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
  }
`;

export const MyPageContainer = styled.div`
  margin-top: 5rem;
  .lecture-video {
    font-size: 3rem;
    color: #8a85ec;
    margin-bottom: 1rem;
  }

  div {
    display: flex;
    justify-content: space-between;
    align-items: center;
    .lecture-time {
      font-size: 3rem;
      color: #8a85ec;
    }

    .mv-classroom {
      display: flex;
      justify-content: center;
      border-radius: 3rem;
      width: 15rem;
      height: 5rem;
      font-size: 1.5rem;
      color: white;
      background-color: #8a85ec;
    }
  }
`;
