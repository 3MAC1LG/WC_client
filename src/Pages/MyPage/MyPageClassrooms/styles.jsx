import styled from '@emotion/styled';
import { css } from '@emotion/react';

export const MyPageClassroomsContainer = styled.div`
  padding-left: 6rem;
  flex: 0.9;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  .title {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    h1 {
      font-size: 2.4rem;
    }
  }
  .lottie {
    width: 85%;
    margin-top: 4rem;
  }

  p {
    margin-top: 2rem;
    margin-bottom: 6rem;
    font-size: 1.75rem;
  }
`;

export const MyPagePtagStyles = (theme) => css`
  color: ${theme.font_l};
`;
