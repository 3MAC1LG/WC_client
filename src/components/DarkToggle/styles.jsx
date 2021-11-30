import { css } from '@emotion/react';

export const DarkToggleContainer = (theme) => css`
  position: fixed;
  box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
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
  z-index: 999;
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
