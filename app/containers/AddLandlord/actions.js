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
  CHANGE_NEW_LANDLORD,
  CHANGE_NAME,
  CHANGE_TYPE,
  CHANGE_LOCATION,
    ADD_LANDLORD_ERROR
} from './constants';

export function changeNewLandlord(newLandlord) {
  return {
    type: CHANGE_NEW_LANDLORD,
    newLandlord,
  };
}
export function changeName(name) {
  return {
    type: CHANGE_NAME,
    name,
  };
}

export function changeType(landlordType) {
  return {
    type: CHANGE_TYPE,
    landlordType,
  };
}
export function changeLocation(location) {
  return {
    type: CHANGE_LOCATION,
    location,
  };
}
/**
 * Dispatched when adding the landlord fails
 *
 * @param  {object} error The error
 *
 * @return {object}       An action object with a type of ADD_LANDLORD_ERROR passing the error
 */
export function landlordAddingError(error) {
  return {
    type: ADD_LANDLORD_ERROR,
    error,
  };
}