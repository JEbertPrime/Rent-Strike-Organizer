/*
 * AppConstants
 * Each action has a corresponding type, which the reducer knows and picks up on.
 * To avoid weird typos between the reducer and the actions, we save them as
 * constants here. We prefix them with 'yourproject/YourComponent' so we avoid
 * reducers accidentally picking up actions they shouldn't.
 *
 * Follow this format:
 * export const YOUR_ACTION_CONSTANT = 'yourproject/YourContainer/YOUR_ACTION_CONSTANT';
 */
export const LOAD_LANDLORDS = 'rent-strike-organizer/App/LOAD_LANDLORDS';
export const LOAD_LANDLORDS_SUCCESS =
  'rent-strike-organizer/App/LOAD_LANDLORDS_SUCCESS';
export const LOAD_LANDLORDS_ERROR =
  'rent-strike-organizer/App/LOAD_LANDLORDS_ERROR';
export const LOAD_LANDLORD = 'rent-strike-organizer/App/LOAD_LANDLORD';
export const LOAD_LANDLORD_SUCCESS =
  'rent-strike-organizer/App/LOAD_LANDLORD_SUCCESS';
export const LOAD_LANDLORD_ERROR =
  'rent-strike-organizer/App/LOAD_LANDLORD_ERROR';
export const ADD_LANDLORD = 'rent-strike-organizer/App/ADD_LANDLORD';
export const ADD_LANDLORD_SUCCESS =
  'rent-strike-organizer/App/ADD_LANDLORD_SUCCESS';
export const ADD_LANDLORD_ERROR =
  'rent-strike-organizer/App/ADD_LANDLORD_ERROR';
export const LOGIN = 'rent-strike-organizer/LoginPage/LOGIN';
export const LOGIN_SUCCESS = 'rent-strike-organizer/LoginPage/LOGIN_SUCCESS';
export const LOGIN_ERROR = 'rent-strike-organizer/LoginPage/LOGIN_FAILURE';
export const SET_USER = 'rent-strike-organizer/LoginPage/SET_USER';
export const LOGOUT = 'rent-strike-organizer/LoginPage/LOGOUT';
export const LOGOUT_SUCCESS = 'rent-strike-organizer/LoginPage/LOGOUT_SUCCESS';
