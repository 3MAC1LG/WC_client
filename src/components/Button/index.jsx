import React from 'react';
import styled from '@emotion/styled';
import useDarkMode from 'use-dark-mode';
import { css } from '@emotion/react';

const Button = ({ text, onClick, ...props }) => {
  const darkMode = useDarkMode(false);
  return (
    <ButtonContainer {...props} darkMode={darkMode.value} onClick={onClick}>
      {text}
    </ButtonContainer>
  );
};

export default Button;

export const ButtonContainer = styled.button`
  border: none;
  background: none;
  outline: none;
  cursor: pointer;
  border-radius: 5rem;
  padding: 1.5rem 4.25rem;
  font-size: 1.75rem;
  font-weight: bold;
  color: #fcfdfe;
  &:hover {
    opacity: 0.9;
  }
  ${(props) =>
    props.darkMode
      ? css`
          background: #070915;
        `
      : css`
          background: #8a85ec;
        `}
`;
