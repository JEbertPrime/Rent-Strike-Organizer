/*
 * LoginReducer
 *
 * The reducer takes care of our data. Using actions, we can
 * update our application state. To add a new action,
 * add it to the switch statement in the reducer function
 *
 */

import produce from 'immer';
import { CHANGE_USER, CHANGE_EMAIL, CHANGE_PASSWORD } from './constants';

// The initial state of the App
export const initialState = {
  user: {
    email: '',
    password: '',
  },
};

/* eslint-disable default-case, no-param-reassign */
const loginReducer = (state = initialState, action) =>
  produce(state, draft => {
    switch (action.type) {
      case CHANGE_USER:
        // Put any formatting for searching database HERE
        draft.user = action.user;
        break;
      case CHANGE_EMAIL:
        // Put any formatting for searching database HERE
        draft.user.email = action.email;
        break;
      case CHANGE_PASSWORD:
        // Put any formatting for searching database HERE
        draft.user.password = action.password;
        break;
    }
  });

export default loginReducer;
