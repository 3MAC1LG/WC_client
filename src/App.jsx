import React from 'react';
import { Route, Switch } from 'react-router';
import GlobalStyles from './lib/styles/global';

const App = () => {
  return (
    <>
      <GlobalStyles />
      <Switch>
        <Route></Route>
        <Route></Route>
        <Route></Route>
      </Switch>
    </>
  );
};

export default App;
