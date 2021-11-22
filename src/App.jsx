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
import { fetcher } from './lib/api/fetcher';
import DarkToggle from './components/DarkToggle';
import FixedCircle from './components/FixedCircle';

const Login = loadable(() => import('./pages/Login'));
const Account = loadable(() => import('./pages/Account'));
const MyPage = loadable(() => import('./pages/MyPage'));
const Lecture = loadable(() => import('./pages/Lecture'));

const App = () => {
  const { data: userData, error } = useSWR(
    'http://localhost:4000/api/users',
    fetcher,
  );
  const darkMode = useDarkMode(false);
  return (
    <>
      <ThemeProvider theme={Theme[darkMode.value ? 'dark' : 'light']}>
        <GlobalStyles />
        <Header />
        <DarkToggle />
        <FixedCircle />
        <Switch>
          <Route exact path="/">
            <Main />
          </Route>
          <Route
            path="/login"
            render={(props) => !userData && <Login {...props} />}
          />
          <Route path="/landing">
            <Landing />
          </Route>
          <Route path="/lecture">
            <Lecture />
          </Route>
          <Route
            path="/mypage"
            render={(props) => userData && <MyPage {...props} />}
          />
          <Route
            path="/account"
            render={(props) => userData && <Account {...props} />}
          />
        </Switch>
      </ThemeProvider>
    </>
  );
};

export default App;
