/*
 * RegisterReducer
 *
 * The reducer takes care of our data. Using actions, we can
 * update our application state. To add a new action,
 * add it to the switch statement in the reducer function
 *
 */

import produce from 'immer';
import {
  CHANGE_NEW_USER,
  CHANGE_EMAIL,
  CHANGE_PASSWORD_ONE,
  CHANGE_PASSWORD_TWO,
  CHANGE_NAME,
} from './constants';

// The initial state of the App
export const initialState = {
  newUser: {
    name: '',
    email: '',
    passwordOne: '',
    passwordTwo: '',
  },
};

/* eslint-disable default-case, no-param-reassign */
const registerReducer = (state = initialState, action) =>
  produce(state, draft => {
    switch (action.type) {
      case CHANGE_NEW_USER:
        // Put any formatting for searching database HERE
        draft.newUser = action.user;
        break;
      case CHANGE_NAME:
        draft.newUser.name = action.name;
        break;
      case CHANGE_EMAIL:
        // Put any formatting for searching database HERE
        draft.newUser.email = action.email;
        break;
      case CHANGE_PASSWORD_ONE:
        // Put any formatting for searching database HERE
        draft.newUser.passwordOne = action.password;
        break;
      case CHANGE_PASSWORD_TWO:
        draft.newUser.passwordTwo = action.password;
        break;
    }
  });

export default registerReducer;
