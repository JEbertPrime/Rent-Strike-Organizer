/*
 * Register
 *
 * at the '/register' route
 * Needed Components: Input, Submit
 * Needed Actions: login
 */
// Sagas
import { useInjectReducer } from 'utils/injectReducer';
import { useInjectSaga } from 'utils/injectSaga';
import { Redirect } from 'react-router';
import {
  makeSelectLoading,
  makeSelectError,
  makeSelectToken,
} from 'containers/App/selectors';
import React, { memo, useState } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { createStructuredSelector } from 'reselect';
import styled from 'styled-components';
// Components imports
import LoadingIndicator from 'components/LoadingIndicator';
import Input from 'components/Input';
import Button from 'components/Button';
import { register } from 'containers/App/actions';
import Form from './Form';
import saga from './saga';
import reducer from './reducer';
import {
  changeEmail,
  changePasswordOne,
  changePasswordTwo,
  changeName,
} from './actions';
import { makeSelectNewUser } from './selectors';
const key = 'register';
const ErrorMessage = styled.p`
  font-size: 0.9rem;
  color: red;
  background-color: rgba(255, 255, 255, 1);
  border: 1px solid black;
  padding: 5px;
  margin-top: 0px;
`;
export function RegisterBox({
  loading,
  error,
  newUser,
  token,
  onSubmitForm,
  onChangeEmail,
  onChangePasswordOne,
  onChangePasswordTwo,
  onChangeName,
}) {
  const [errors, setErrors] = useState({});
  useInjectReducer({ key, reducer });
  useInjectSaga({ key, saga });
  if (loading) content = <LoadingIndicator />;
  let content = (
    <div>
      <Form onSubmit={onSubmitForm}>
        <Input
          id="email"
          type="text"
          placeholder="email"
          value={newUser.email}
          onChange={onChangeEmail}
        />
        {errors.email ? <ErrorMessage>{errors.email}</ErrorMessage> : <div />}
        <Input
          id="name"
          type="text"
          placeholder="username"
          value={newUser.name}
          onChange={onChangeName}
        />
        {errors.name ? <ErrorMessage>{errors.name}</ErrorMessage> : <div />}
        <Input
          id="password1"
          type="password"
          placeholder="password"
          value={newUser.passwordOne}
          onChange={onChangePasswordOne}
        />
        {errors.password ? (
          <ErrorMessage>{errors.password}</ErrorMessage>
        ) : (
          <div />
        )}
        <Input
          id="password2"
          type="password"
          placeholder="password"
          value={newUser.passwordTwo}
          onChange={onChangePasswordTwo}
        />
        {errors.password2 ? (
          <ErrorMessage>{errors.password2}</ErrorMessage>
        ) : (
          <div />
        )}

        <Button type="submit">Register</Button>
      </Form>
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
RegisterBox.propTypes = {
  loading: PropTypes.bool,
  error: PropTypes.oneOfType([PropTypes.object, PropTypes.bool]),
  newUser: PropTypes.oneOfType([PropTypes.object, PropTypes.bool]),
  token: PropTypes.string,
  onSubmitForm: PropTypes.func,
  onChangePasswordOne: PropTypes.func,
  onChangePasswordTwo: PropTypes.func,
  onChangeEmail: PropTypes.func,
  onChangeName: PropTypes.func,
};

const mapStateToProps = createStructuredSelector({
  newUser: makeSelectNewUser(),
  loading: makeSelectLoading(),
  error: makeSelectError(),
  token: makeSelectToken(),
});
export function mapDispatchToProps(dispatch) {
  return {
    onChangePasswordOne: evt => {
      dispatch(changePasswordOne(evt.target.value));
    },
    onChangePasswordTwo: evt => {
      dispatch(changePasswordTwo(evt.target.value));
    },
    onChangeEmail: evt => {
      dispatch(changeEmail(evt.target.value));
    },
    onChangeName: evt => {
      dispatch(changeName(evt.target.value));
    },
    onSubmitForm: evt => {
      if (evt !== undefined && evt.preventDefault) evt.preventDefault();
      dispatch(register());
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
)(RegisterBox);
