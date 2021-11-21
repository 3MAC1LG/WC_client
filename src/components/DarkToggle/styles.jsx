import { css } from '@emotion/react';

export const DarkToggleContainer = (theme) => css`
  position: fixed;
  width: 6.5rem;
  height: 6.5rem;
  right: 6rem;
  bottom: 6rem;
  border-radius: 3.25rem;
  cursor: pointer;
  background: ${theme.header};
  display: flex;
  align-items: center;
  justify-content: center;
  svg {
    font-size: 4rem;
  }

  .sun {
    color: #292a2d;
  }
  .moon {
    color: #fcfdfe;
  }
`;