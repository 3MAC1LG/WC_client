/** @jsxImportSource @emotion/react */
import { useTheme } from '@emotion/react';
import React, { useCallback } from 'react';
import { NavLink } from 'react-router-dom';
import Responsive from '../../lib/styles/Responsive';
import { withRouter } from 'react-router-dom';
import { HeaderContainer, HeaderContainerStyles, Space } from './styles';

const Header = ({ history }) => {
  const theme = useTheme();
  const onPush = useCallback(
    (type) => {
      if (!type) {
        history.push('/');
      } else {
        history.push(`/${type}`);
      }
    },
    [history],
  );
  return (
    <>
      <HeaderContainer css={HeaderContainerStyles(theme)}>
        <Responsive>
          <div className="header">
            <div className="header-left">
              <h1 onClick={() => onPush()}>위드클래스</h1>
            </div>
            <div className="header-right">
              <ul>
                <li>
                  <NavLink activeStyle={{ fontWeight: 'bold' }} to="/lecture">
                    강의찾기
                  </NavLink>
                </li>
                <li>
                  <NavLink activeStyle={{ fontWeight: 'bold' }} to="/account">
                    마이페이지
                  </NavLink>
                </li>
                <li>
                  <button onClick={() => onPush('login')}>로그인</button>
                </li>
              </ul>
            </div>
          </div>
        </Responsive>
      </HeaderContainer>
      <Space />
    </>
  );
};

export default withRouter(Header);
