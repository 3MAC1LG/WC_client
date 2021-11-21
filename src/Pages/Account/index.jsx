/** @jsxImportSource @emotion/react */
import React from 'react';
import { AccountContainer, AccountContainerStyles } from './styles';
import Responsive from '../../lib/styles/Responsive';
import Menu from '../../components/Menu';
import AccountForm from './AccountForm';
import { useTheme } from '@emotion/react';

const Accout = () => {
  const theme = useTheme();
  return (
    <AccountContainer css={AccountContainerStyles(theme)}>
      <Responsive>
        <div className="account">
          <Menu />
          <AccountForm />
        </div>
      </Responsive>
    </AccountContainer>
  );
};

export default Accout;
