/*
 * Register Actions
 *
 * Actions change things in your application
 * Since this boilerplate uses a uni-directional data flow, specifically redux,
 * we have these actions which are the only way your application interacts with
 * your application state. This guarantees that your state is up to date and nobody
 * messes it up weirdly somewhere.
 *
 * To add a new Action:
 * 1) Import your constant
 * 2) Add a function like this:
 *    export function yourAction(var) {
 *        return { type: YOUR_ACTION_CONSTANT, var: var }
 *    }
 */

import {
  CHANGE_NEW_USER,
  CHANGE_PASSWORD_ONE,
  CHANGE_PASSWORD_TWO,
  CHANGE_EMAIL,
  CHANGE_NAME,
} from './constants';

export function changeNewUser(newUser) {
  return {
    type: CHANGE_NEW_USER,
    newUser,
  };
}
export function changePasswordOne(password) {
  return {
    type: CHANGE_PASSWORD_ONE,
    password,
  };
}
export function changePasswordTwo(password) {
  return {
    type: CHANGE_PASSWORD_TWO,
    password,
  };
}
export function changeEmail(email) {
  return {
    type: CHANGE_EMAIL,
    email,
  };
}
export function changeName(name) {
  return {
    type: CHANGE_NAME,
    name,
  };
}
