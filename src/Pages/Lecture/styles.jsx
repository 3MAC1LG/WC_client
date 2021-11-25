import { css } from '@emotion/react';
import styled from '@emotion/styled';

export const LectureContainer = styled.div`
  margin-top: 6rem;
  margin-bottom: 4rem;

  .lecture {
    display: flex;
    .lecture-layout {
      flex: 1;
      display: flex;
      flex-direction: column;
      justify-content: center;
    }
  }
`;

export const LecturePagenationStyles = (theme) => css``;
