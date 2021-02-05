/*
 * AddLandlordReducer
 *
 * The reducer takes care of our data. Using actions, we can
 * update our application state. To add a new action,
 * add it to the switch statement in the reducer function
 *
 */

import produce from 'immer';
import {
  CHANGE_NEW_LANDLORD,
  CHANGE_NAME,
  CHANGE_TYPE,
  CHANGE_LOCATION,
    ADD_LANDLORD_ERROR
} from './constants';

// The initial state of the App
export const initialState = {
  newLandlord: {
    name: '',
    landlordType: 'landlord',
    location: '',
  },
    error:{}
};

/* eslint-disable default-case, no-param-reassign */
const addLandlordReducer = (state = initialState, action) =>
  produce(state, draft => {
    switch (action.type) {
      case CHANGE_NEW_LANDLORD:
        // Put any formatting for searching database HERE
        draft.newLandlord = action.newLandlord;
        break;
      case CHANGE_NAME:
        draft.newLandlord.name = action.name;
        break;
      case CHANGE_TYPE:
        // Put any formatting for searching database HERE
        draft.newLandlord.landlordType = action.landlordType;
        break;
      case CHANGE_LOCATION:
        // Put any formatting for searching database HERE
        draft.newLandlord.location = action.location;
        break;
        case ADD_LANDLORD_ERROR:
            draft.error = action.error;
            break;
    }
  });

export default addLandlordReducer;
