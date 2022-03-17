import { createSelector } from "reselect";

const getFriends = (state) => state.friend.friends;
export const getAgeLimit = (state) => state.friend.ageLimit;
export const getShowLimit = (state) => state.friend.showLimit;

export const getFriendsWithAgeLimit = createSelector;
