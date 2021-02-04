/**
 * LoginBox selectors
 */

import { createSelector } from 'reselect';
import { initialState } from './reducer';

const selectLogin = state => state.login || initialState;

const makeSelectEmail = () =>
  createSelector(
    selectLogin,
    loginState => loginState.user.email,
  );
const makeSelectPassword = () =>
  createSelector(
    selectLogin,
    loginState => loginState.user.password,
  );
const makeSelectUser = () =>
  createSelector(
    selectLogin,
    loginState => loginState.user,
  );
export { selectLogin, makeSelectEmail, makeSelectPassword, makeSelectUser };
