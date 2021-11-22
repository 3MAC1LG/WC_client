/** @jsxImportSource @emotion/react */
import { useTheme } from '@emotion/react';
import React, { useCallback, useState } from 'react';
import { NavLink } from 'react-router-dom';
import Responsive from '../../lib/styles/Responsive';
import { withRouter } from 'react-router-dom';
import { HeaderContainer, HeaderContainerStyles, Space } from './styles';
import useSWR from 'swr';
import { fetcher } from '../../lib/api/fetcher';
import { BiUser } from 'react-icons/bi';
import Modal from '../../components/Modal';

const Header = ({ history }) => {
  const {
    data: userData,
    error,
    mutate,
  } = useSWR('http://localhost:4000/api/users', fetcher);
  const [modal, setModal] = useState(false);
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
  const onModal = useCallback(() => {
    setModal((prev) => !prev);
  }, [setModal]);
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
                  <NavLink
                    activeStyle={{ fontWeight: 'bold' }}
                    to="/lecture/:all"
                  >
                    강의찾기
                  </NavLink>
                </li>
                {userData && (
                  <li>
                    <NavLink activeStyle={{ fontWeight: 'bold' }} to="/mypage">
                      마이페이지
                    </NavLink>
                  </li>
                )}
                <li>
                  {userData ? (
                    <div className="header-user">
                      <div className="header-user-back" onClick={onModal}>
                        <BiUser />
                        {modal && <Modal modal={modal} setModal={setModal} />}
                      </div>
                    </div>
                  ) : (
                    <button onClick={() => onPush('login')}>로그인</button>
                  )}
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
