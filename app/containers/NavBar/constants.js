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
export const CHANGE_CURRENT_SEARCH2 =
  'rent-strike-organizer/NavBar/CHANGE_CURRENT_SEARCH2';
export const LOAD_LANDLORDS = 'rent-strike-organizer/NavBar/LOAD_LANDLORDS';
export const LOAD_LANDLORDS_SUCCESS =
  'rent-strike-organizer/NavBar/LOAD_LANDLORDS_SUCCESS';
export const LOAD_LANDLORDS_ERROR =
  'rent-strike-organizer/NavBar/LOAD_LANDLORDS_ERROR';
export const CLEAR_LIST = 'rent-strike-organizer/NavBar/CLEAR_LIST';
