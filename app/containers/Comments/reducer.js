/*
 * HomeReducer
 *
 * The reducer takes care of our data. Using actions, we can
 * update our application state. To add a new action,
 * add it to the switch statement in the reducer function
 *
 */

import produce from 'immer';
import { ADD_COMMENT_SUCCESS } from './constants';

// The initial state of the App
export const initialState = {
  comments: [],
};

/* eslint-disable default-case, no-param-reassign */
const landlordReducer = (state = initialState, action) =>
  produce(state, draft => {
    switch (action.type) {
      case ADD_COMMENT_SUCCESS:
        // Put any formatting for searching database HERE
        draft.comments.push(action.comment);
        break;
    }
  });

export default landlordReducer;
