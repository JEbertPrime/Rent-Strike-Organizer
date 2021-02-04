/*
 * Login
 *
 * at the '/login' route
 * Needed Components: Input, Submit, RegisterButton
 * Needed Actions: login, register
 */
// Sagas

import React from 'react';
import styled from 'styled-components';

import LoginBox from 'containers/LoginBox/Loadable';
import RegisterBox from 'containers/RegisterBox/Loadable';

const LoginPageWrapper = styled.div`
  max-width: calc(468px + 16px * 2);
  margin: 0 auto;
  display: flex;
  min-height: 100%;
  padding: 0 16px;
  flex-direction: column;
`;
export default function LoginPage(props) {
  const { item } = props;
  let content = <LoginPageWrapper />;
  if (item === 'login') {
    content = (
      <LoginPageWrapper>
        <LoginBox />
      </LoginPageWrapper>
    );
  }
  if (item === 'register') {
    content = (
      <LoginPageWrapper>
        <RegisterBox />
      </LoginPageWrapper>
    );
  }
  return content;
}
