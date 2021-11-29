import styled from '@emotion/styled';
import { css } from '@emotion/react';

export const StudyroomContainer = styled.div`
  .studyroom-grid {
    display: grid;
    grid-template-columns: 2.75fr 1fr;
    column-gap: 3rem;
    margin-top: 6rem;
  }
`;

export const StudyroomHeader = styled.div`
  width: 100%;
  padding: 2.5rem 0;
  .studyroom-header {
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    font-size: 0.85rem;
    .studyroom-header-quit {
      cursor: pointer;
    }
    .studyroom-header-title {
      padding-left: 4rem;
    }
  }
`;

export const StudyroomHeaderStyles = (theme) => css`
  background: ${theme.header};
  .studyroom-header {
    color: ${theme.font_a};
    .studyroom-header-quit {
    }
    .studyroom-header-title {
    }
  }
`;
