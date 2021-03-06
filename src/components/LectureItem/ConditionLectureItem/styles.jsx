import styled from '@emotion/styled';
import { css } from '@emotion/react';

export const SearchContainer = styled.div`
  .study-info {
    display: flex;
    flex-direction: column;
    margin-top: 5rem;

    .lecture-video {
      font-size: 3rem;
      margin-bottom: 1rem;
    }
    .lecture-time {
      font-size: 3rem;
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
    margin-bottom: 1rem;
  }

  .lecture-footer {
    display: flex;
    align-items: center;
    justify-content: space-between;
    .lecture-time {
      font-size: 3rem;
      color: #8a85ec;
    }
  }
`;

export const SearchStyleContainer = (theme) => css`
  .study-info {
    .lecture-video {
      color: ${theme.primary};
    }
    .lecture-time {
      color: ${theme.primary};
    }
  }
`;

export const MyPageStyleContainer = (theme) => css`
  .lecture-video {
    color: ${theme.primary};
  }
  .lecture-footer {
    .lecture-time {
      color: ${theme.primary};
    }

    .mv-classroom {
      background-color: ${theme.font_b};
    }
  }
`;
