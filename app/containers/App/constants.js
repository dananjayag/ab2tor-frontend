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
 
 export const CHECK_AND_VERIFY_TOKEN = "CHECK_AND_VERIFY_TOKEN";
 export const UPDATE_TOKEN = "UPDATE_TOKEN";
 export const AUTHENTICATE_WITH_GOOGLE = "AUTHENTICATE_WITH_GOOGLE";
 export const LOG_OUT="LOG_OUT";

