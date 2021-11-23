import React from 'react';
import { Redirect, Route, Switch } from 'react-router';
import useDarkMode from 'use-dark-mode';
import GlobalStyles from './lib/styles/global';
import loadable from '@loadable/component';
import { ThemeProvider } from '@emotion/react';
import Theme from './lib/styles/Theme';
import Landing from './pages/Landing';
import Header from './layout/Header';
import useSWR from 'swr';
import { fetcher } from './lib/api/fetcher';
import DarkToggle from './components/DarkToggle';
import FixedCircle from './components/FixedCircle';
import MyPage from './pages/MyPage';

const Login = loadable(() => import('./pages/Login'));
const Account = loadable(() => import('./pages/Account'));
const Lecture = loadable(() => import('./pages/Lecture'));
const Classroom = loadable(() => import('./pages/Classroom'));
const NotFound = loadable(() => import('./pages/NotFound'));
const NotLogin = loadable(() => import('./pages/NotLogin'));

const App = () => {
  const { data: userData } = useSWR('http://localhost:4000/api/users', fetcher);
  const darkMode = useDarkMode(false);
  return (
    <>
      <ThemeProvider theme={Theme[darkMode.value ? 'dark' : 'light']}>
        <GlobalStyles />
        <Header />
        <DarkToggle />
        <FixedCircle />
        <Switch>
          <Redirect exact path="/" to="/mypage" />
          <Route
            path="/mypage"
            render={(props) =>
              userData ? <MyPage {...props} /> : <NotLogin />
            }
          />
          <Route
            path="/login"
            render={(props) =>
              !userData ? (
                <Login {...props} />
              ) : (
                <Redirect path="/login" to="/mypage" />
              )
            }
          />
          <Route path="/landing">
            <Landing />
          </Route>
          <Route path="/lecture/:category">
            <Switch>
              <Route exact path="/lecture/:category">
                <Lecture />
              </Route>
              <Route path="/lecture/:category/classroom/:classroomId">
                <Classroom />
              </Route>
            </Switch>
          </Route>
          <Route
            path="/account"
            render={(props) =>
              userData ? (
                <Account {...props} />
              ) : (
                <Redirect path="/account" to="/login" />
              )
            }
          />
          <Route path="*">
            <NotFound />
          </Route>
        </Switch>
      </ThemeProvider>
    </>
  );
};

export default App;
