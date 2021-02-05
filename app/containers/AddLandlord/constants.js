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

export const CHANGE_NEW_LANDLORD = 'rent-strike-organizer/AddLandlord/CHANGE_NEW_LANDLORD';
export const CHANGE_NAME = 'rent-strike-organizer/AddLandlord/CHANGE_NAME';
export const CHANGE_TYPE = 'rent-strike-organizer/AddLandlord/CHANGE_TYPE';
export const CHANGE_LOCATION = 'rent-strike-organizer/AddLandlord/CHANGE_LOCATION';
export const ADD_LANDLORD_ERROR ='rent-strike-organizer/AddLandlord/ADD_LANDLORD_ERROR';
