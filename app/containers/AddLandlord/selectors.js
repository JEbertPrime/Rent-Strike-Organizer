/**
 * LoginBox selectors
 */

import { createSelector } from 'reselect';
import { initialState } from './reducer';

const selectRegister = state => state.register || initialState;

const makeSelectEmail = () =>
  createSelector(
    selectRegister,
    registerState => registerState.newUser.email,
  );
const makeSelectName = () =>
  createSelector(
    selectRegister,
    registerState => registerState.newUser.name,
  );
const makeSelectPasswordOne = () =>
  createSelector(
    selectRegister,
    registerState => registerState.newUser.passwordOne,
  );
const makeSelectPasswordTwo = () =>
  createSelector(
    selectRegister,
    registerState => registerState.newUser.passwordTwo,
  );
const makeSelectNewUser = () =>
  createSelector(
    selectRegister,
    registerState => registerState.newUser,
  );
export {
  makeSelectEmail,
  makeSelectName,
  makeSelectPasswordOne,
  makeSelectPasswordTwo,
  makeSelectNewUser,
};
