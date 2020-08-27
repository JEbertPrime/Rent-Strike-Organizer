/*
 * App Actions
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
  LOAD_LANDLORD,
  LOAD_LANDLORD_SUCCESS,
  LOAD_LANDLORD_ERROR,
  LOGIN,
  LOGIN_SUCCESS,
  LOGIN_ERROR,
  LOGOUT,
  LOGOUT_SUCCESS,
  SET_USER,
} from './constants';

/**
 * Load the landlords, this action starts the request saga
 *
 * @return {object} An action object with a type of LOAD_LANDLORD
 */
export function loadLandlords() {
  return {
    type: LOAD_LANDLORDS,
  };
}

/**
 * Dispatched when the landlords are loaded by the request saga
 *
 * @param  {array} landlords The landlord data
 * @param  {string} search The current search
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
/**
 * Load Landlord by ID, starts request saga
 *
 * @return {object} An action object with a type of LOAD_LANDLORD
 */
export function loadLandlordById(id) {
  return {
    type: LOAD_LANDLORD,
    id,
  };
}

/**
 * Dispatched when the landlord is loaded by the request saga
 *
 * @param  {array} landlord The landlord data
 * @param  {string} id The landlord id
 *
 * @return {object}      An action object with a type of LOAD_LANDLORD_SUCCESS passing the repos
 */
export function landlordLoadedById(landlord, id) {
  return {
    type: LOAD_LANDLORD_SUCCESS,
    landlord,
    id,
  };
}

/**
 * Dispatched when loading the repositories fails
 *
 * @param  {object} error The error
 *
 * @return {object}       An action object with a type of LOAD_REPOS_ERROR passing the error
 */
export function landlordLoadingByIdError(error) {
  return {
    type: LOAD_LANDLORD_ERROR,
    error,
  };
}

/**
 * Dispatched when logging in, starts the request saga
 *
 *
 * @return {object}       an object with type LOGIN
 */
export function login() {
  return {
    type: LOGIN,
  };
}
export function loginSuccess(userToken) {
  return {
    type: LOGIN_SUCCESS,
    userToken,
  };
}
export function loginError(error) {
  return {
    type: LOGIN_ERROR,
    error,
  };
}
export function setUserToken(userToken) {
  return {
    type: SET_USER,
    userToken,
  };
}
export function logout() {
  return {
    type: LOGOUT,
  };
}
export function logoutSuccess() {
  return {
    type: LOGOUT_SUCCESS,
  };
}
