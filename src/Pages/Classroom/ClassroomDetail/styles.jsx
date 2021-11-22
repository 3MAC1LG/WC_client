import { css } from '@emotion/react';
import styled from '@emotion/styled';

export const ClassroomDetailContainer = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  border-radius: 1.2rem;

  .classroom-padding {
    padding: 3rem;
    .classroom-contents {
      .classroom-contents-title {
        display: flex;
        flex-direction: column;
        p {
          margin: 0;
          font-size: 1.9rem;
          font-weight: bold;
          padding-bottom: 0.5rem;
        }
        h1 {
          font-size: 2.4rem;
        }
      }
      .classroom-contents-grid {
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        row-gap: 2rem;
        .classroom-video {
          height: 30rem;
        }
        .classroom-section {
        }
      }
    }
  }
`;

export const ClassroomDetailContainerStyles = (theme) => css`
  background: ${theme.border};
  .classroom-padding {
    padding: 3rem;
    .classroom-contents {
      .classroom-contents-title {
        color: #080305;
        margin-bottom: 3rem;
        p {
        }
        h1 {
        }
      }
      .classroom-contents-grid {
        .classroom-video {
          background: #eaeaea;
        }
        .classroom-section {
        }
      }
    }
  }
`;
