/*
 * Login
 *
 * at the '/login' route
 * Needed Components: Input, Submit, RegisterButton
 * Needed Actions: login, register
 */
// Sagas
import { useInjectReducer } from 'utils/injectReducer';
import { useInjectSaga } from 'utils/injectSaga';
import { Redirect } from 'react-router';
import {
  // makeSelectLoading,
  makeSelectError,
  makeSelectToken,
} from 'containers/App/selectors';
import React, { memo, useState } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { createStructuredSelector } from 'reselect';
// Components imports
import H1 from 'components/H1';
import Input from 'components/Input';
import Button from 'components/Button';
import ErrorMessage from 'components/ErrorMessage';
import { login } from 'containers/App/actions';
import Form from './Form';
import saga from './saga';
import reducer from './reducer';
import { changeEmail, changePassword } from './actions';
import { makeSelectUser } from './selectors';
const key = 'login';

export function LoginBox({
  // loading,
  error,
  user,
  token,
  onSubmitForm,
  onChangeEmail,
  onChangePassword,
}) {
  const [errors, setErrors] = useState({});
  useInjectReducer({ key, reducer });
  useInjectSaga({ key, saga });

  let content = (
    <div>
      <Form onSubmit={onSubmitForm}>
        <Input
          id="email"
          type="text"
          placeholder="email"
          value={user.email}
          onChange={onChangeEmail}
        />
        {errors.email ? <ErrorMessage>{errors.email}</ErrorMessage> : <div />}
        <Input
          id="password"
          type="password"
          placeholder="password"
          value={user.password}
          onChange={onChangePassword}
        />
        {errors.password ? (
          <ErrorMessage>{errors.password}</ErrorMessage>
        ) : (
          <div />
        )}
        <Button type="submit">Login</Button>
      </Form>
      <H1 />
    </div>
  );
  if (error) {
    error.json.then(value => {
      setErrors(value);
    });
  }
  // When user is authenticated, push to home page
  if (token) {
    content = <Redirect to="" />;
  }
  return content;
}
LoginBox.propTypes = {
  loading: PropTypes.bool,
  error: PropTypes.oneOfType([PropTypes.object, PropTypes.bool]),
  user: PropTypes.oneOfType([PropTypes.object, PropTypes.bool]),
  token: PropTypes.string,
  onSubmitForm: PropTypes.func,
  onChangePassword: PropTypes.func,
  onChangeEmail: PropTypes.func,
};

const mapStateToProps = createStructuredSelector({
  user: makeSelectUser(),
  // loading: makeSelectLoading(),
  error: makeSelectError(),
  token: makeSelectToken(),
});
export function mapDispatchToProps(dispatch) {
  return {
    onChangePassword: evt => {
      dispatch(changePassword(evt.target.value));
    },
    onChangeEmail: evt => {
      dispatch(changeEmail(evt.target.value));
    },
    onSubmitForm: evt => {
      if (evt !== undefined && evt.preventDefault) evt.preventDefault();
      dispatch(login());
    },
  };
}

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

export default compose(
  withConnect,
  memo,
)(LoginBox);
