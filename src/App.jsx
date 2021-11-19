import React from 'react';
import { Route, Switch } from 'react-router';
import useDarkMode from 'use-dark-mode';
import GlobalStyles from './lib/styles/global';
import loadable from '@loadable/component';
import { ThemeProvider } from '@emotion/react';
import Theme from './lib/styles/Theme';
import Main from './pages/Main';
import Landing from './pages/Landing';
import Header from './layout/Header';
import useSWR from 'swr';

const Login = loadable(() => import('./pages/Login'));
const Account = loadable(() => import('./pages/Account'));
const Lecture = loadable(() => import('./pages/Lecture'));

const App = () => {
  const darkMode = useDarkMode(false);
  return (
    <>
      <ThemeProvider theme={Theme[darkMode.value ? 'dark' : 'light']}>
        <GlobalStyles />
        <Header />
        <Switch>
          <Route exact path="/">
            <Main />
          </Route>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/landing">
            <Landing />
          </Route>
          <Route path="/lecture">
            <Lecture />
          </Route>
          <Route path="/account">
            <Account />
          </Route>
        </Switch>
      </ThemeProvider>
    </>
  );
};

export default App;
