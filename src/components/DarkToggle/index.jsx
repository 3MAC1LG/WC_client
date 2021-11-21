/** @jsxImportSource @emotion/react */
import { useTheme } from '@emotion/react';
import React from 'react';
import { DarkToggleContainer } from './styles';
import { IoMoonSharp } from 'react-icons/io5';
import { HiOutlineSun } from 'react-icons/hi';
import useDarkMode from 'use-dark-mode';

const DarkToggle = () => {
  const theme = useTheme();
  const darkMode = useDarkMode(false);
  return (
    <div css={DarkToggleContainer(theme)} onClick={darkMode.toggle}>
      {darkMode.value ? (
        <HiOutlineSun className="sun" />
      ) : (
        <IoMoonSharp className="moon" />
      )}
    </div>
  );
};

export default DarkToggle;
