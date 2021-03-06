/*
 * RegisterConstants
 * Each action has a corresponding type, which the reducer knows and picks up on.
 * To avoid weird typos between the reducer and the actions, we save them as
 * constants here. We prefix them with 'yourproject/YourComponent' so we avoid
 * reducers accidentally picking up actions they shouldn't.
 *
 * Follow this format:
 * export const YOUR_ACTION_CONSTANT = 'yourproject/YourContainer/YOUR_ACTION_CONSTANT';
 */

export const CHANGE_NEW_USER = 'rent-strike-organizer/Register/CHANGE_NEW_USER';
export const CHANGE_NAME = 'rent-strike-organizer/Register/CHANGE_NAME';
export const CHANGE_EMAIL = 'rent-strike-organizer/Register/CHANGE_EMAIL';
export const CHANGE_PASSWORD_ONE =
  'rent-strike-organizer/Register/CHANGE_PASSWORD_ONE';
export const CHANGE_PASSWORD_TWO =
  'rent-strike-organizer/Register/CHANGE_PASSWORD_TWO';
