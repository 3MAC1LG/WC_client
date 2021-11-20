import React from 'react';
import useDarkMode from 'use-dark-mode';

const Main = () => {
  const darkMode = useDarkMode(false);
  return (
    <div className="main">
      <h1>Main Page..</h1>
      <button onClick={darkMode.toggle}>다크 토글</button>
    </div>
  );
};
export default Main;
