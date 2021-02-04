/*
 * App Actions
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
  REGISTER,
  REGISTER_SUCCESS,
  REGISTER_ERROR,
  LOGOUT,
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
 * @return {object}      An action object with a type of LOAD_LANDLORDS_SUCCESS passing the repos
 */
export function landlordsLoaded(landlords, search) {
  return {
    type: LOAD_LANDLORDS_SUCCESS,
    landlords,
    search,
  };
}

/**
 * Dispatched when loading the landlords fails
 *
 * @param  {object} error The error
 *
 * @return {object}       An action object with a type of LOAD_LANDLORDS_ERROR passing the error
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
 * Dispatched when loading the landlord fails
 *
 * @param  {object} error The error
 *
 * @return {object}       An action object with a type of LOAD_LANDLORD_ERROR passing the error
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
/**
 * Dispatched when login is successful, returns the user jwt token
 *
 *
 * @return {object}       an action object with type LOGIN_SUCCESS
 * @return {string} userToken a string containing the user token
 */
export function loginSuccess(userToken) {
  return {
    type: LOGIN_SUCCESS,
    userToken,
  };
}
/**
 * Dispatched when the login fails
 *
 * @param  {object} error The error
 *
 * @return {object}       An action object with a type of LOGIN_ERROR passing the error
 */
export function loginError(error) {
  return {
    type: LOGIN_ERROR,
    error,
  };
}
/**
 * Dispatched when registering, starts the request saga
 *
 *
 * @return {object}       an object with type REGISTER
 */
export function register() {
  return {
    type: REGISTER,
  };
}
/**
 * Dispatched when registering, starts the request saga
 *
 *
 * @return {object}       an object with type           REGISTER_SUCCESS
 * @return {string} userToken       a string with the user token
 */
export function registerSuccess(user) {
  return {
    type: REGISTER_SUCCESS,
    user,
  };
}
/**
 * Dispatched when the registration fails
 *
 * @param  {object} error The error
 *
 * @return {object}       An action object with a type of REGISTER_ERROR passing the error
 */
export function registerError(error) {
  return {
    type: REGISTER_ERROR,
    error,
  };
}
/**
 * Dispatched when setting the userToken, returns the user jwt token
 *
 *
 * @return {object}       an action object with type SET_USER
 * @return {string} userToken a string containing the user token
 */
export function setUserToken(userToken) {
  return {
    type: SET_USER,
    userToken,
  };
}
/**
 * Dispatched when logging out, clears the global state userToken
 *
 *
 * @return {object}       an object with type LOGOUT
 */
export function logout() {
  return {
    type: LOGOUT,
  };
}
