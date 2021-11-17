import { UserActionTypes } from "./UserTypes";
export const setCurrentUser = (user) => ({
  type: UserActionTypes.SET_CURENT_USER,
  payload: user,
});
