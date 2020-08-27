/*
 * Home Actions
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
  LOAD_LANDLORDS,
  LOAD_LANDLORDS_SUCCESS,
  LOAD_LANDLORDS_ERROR,
  CHANGE_CURRENT_SEARCH2,
  CLEAR_LIST,
} from './constants';

/**
 * Changes the input field of the form
 *
 * @param  {string} username The new text of the input field
 *
 * @return {object} An action object with a type of CHANGE_USERNAME
 */
export function changeCurrentSearch2(currentSearch2) {
  return {
    type: CHANGE_CURRENT_SEARCH2,
    currentSearch2,
  };
}
export function loadLandlords() {
  return {
    type: LOAD_LANDLORDS,
  };
}

/**
 * Dispatched when the repositories are loaded by the request saga
 *
 * @param  {array} repos The repository data
 * @param  {string} username The current username
 *
 * @return {object}      An action object with a type of LOAD_REPOS_SUCCESS passing the repos
 */
export function landlordsLoaded(landlords, search) {
  return {
    type: LOAD_LANDLORDS_SUCCESS,
    landlords,
    search,
  };
}

/**
 * Dispatched when loading the repositories fails
 *
 * @param  {object} error The error
 *
 * @return {object}       An action object with a type of LOAD_REPOS_ERROR passing the error
 */
export function landlordLoadingError(error) {
  return {
    type: LOAD_LANDLORDS_ERROR,
    error,
  };
}
export function clearList() {
  return {
    type: CLEAR_LIST,
  };
}
