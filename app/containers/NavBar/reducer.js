/*
 * NavReducer
 *
 * The reducer takes care of our data. Using actions, we can
 * update our application state. To add a new action,
 * add it to the switch statement in the reducer function
 *
 */

import produce from 'immer';
import {
  CHANGE_CURRENT_SEARCH2,
  LOAD_LANDLORDS_SUCCESS,
  LOAD_LANDLORDS,
  LOAD_LANDLORDS_ERROR,
  CLEAR_LIST,
} from './constants';

// The initial state of the App
export const initialState = {
  currentSearch2: '',
  loading: false,
  error: false,
  landlords: [],
};

/* eslint-disable default-case, no-param-reassign */
const navReducer = (state = initialState, action) =>
  produce(state, draft => {
    switch (action.type) {
      case CHANGE_CURRENT_SEARCH2:
        // Put any formatting for searching database HERE
        draft.currentSearch2 = action.currentSearch2;
        break;
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
      case CLEAR_LIST:
        draft.landlords = [];
        draft.error = false;
    }
  });

export default navReducer;
