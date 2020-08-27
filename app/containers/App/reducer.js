/*
 * AppReducer
 *
 * The reducer takes care of our data. Using actions, we can
 * update our application state. To add a new action,
 * add it to the switch statement in the reducer function
 *
 */

import produce from 'immer';
import {
  LOAD_LANDLORDS_SUCCESS,
  LOAD_LANDLORDS,
  LOAD_LANDLORDS_ERROR,
  LOAD_LANDLORD_SUCCESS,
  LOAD_LANDLORD_ERROR,
  LOAD_LANDLORD,
  LOGIN,
  LOGIN_SUCCESS,
  LOGIN_ERROR,
  LOGOUT,
} from './constants';

// The initial state of the App
export const initialState = {
  loading: false,
  error: false,
  landlords: [],
  landlord: { name: '', numTenants: 0, location: [] },
  userToken: '',
  isAuth: false,
};

/* eslint-disable default-case, no-param-reassign */
const appReducer = (state = initialState, action) =>
  produce(state, draft => {
    switch (action.type) {
      case LOAD_LANDLORDS:
        draft.loading = true;
        draft.error = false;
        break;

      case LOAD_LANDLORDS_SUCCESS:
        draft.landlords = action.landlords;
        draft.loading = false;
        break;

      case LOAD_LANDLORDS_ERROR:
        draft.error = action.error;
        draft.loading = false;
        break;
      case LOAD_LANDLORD:
        draft.loading = true;
        draft.error = false;
        break;
      case LOAD_LANDLORD_SUCCESS:
        draft.landlord = action.landlord;
        draft.loading = false;
        break;
      case LOAD_LANDLORD_ERROR:
        draft.loading = false;
        draft.error = action.error;
        break;
      case LOGIN:
        draft.loading = true;
        draft.error = false;
        break;
      case LOGIN_SUCCESS:
        draft.userToken = action.userToken;
        draft.isAuth = true;
        draft.loading = false;
        break;
      case LOGIN_ERROR:
        draft.loading = false;
        draft.error = action.error;
        break;
      case LOGOUT:
        draft.userToken = undefined;
        draft.isAuth = false;
    }
  });

export default appReducer;
