import styled from '@emotion/styled';
import { css } from '@emotion/react';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 15rem;

  .logo {
    margin-bottom: 10rem;
  }
  .text {
    font-size: 1.4rem;
    margin-bottom: 10rem;
    color: #a8a3f3;
  }
`;

export const ContainerStyles = (theme) => css`
  .text {
    color: ${theme.font_l};
  }
`;
