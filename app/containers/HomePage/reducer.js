/*
 * HomeReducer
 *
 * The reducer takes care of our data. Using actions, we can
 * update our application state. To add a new action,
 * add it to the switch statement in the reducer function
 *
 */

import produce from 'immer';
import { CHANGE_CURRENT_SEARCH } from './constants';

// The initial state of the App
export const initialState = {
  currentSearch: '',
};

/* eslint-disable default-case, no-param-reassign */
const homeReducer = (state = initialState, action) =>
  produce(state, draft => {
    switch (action.type) {
      case CHANGE_CURRENT_SEARCH:
        // Put any formatting for searching database HERE
        draft.currentSearch = action.currentSearch;
        break;
    }
  });

export default homeReducer;
