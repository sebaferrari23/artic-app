/** @format */

import { ACTION } from '~/constants';

const initialState = {
  currentIndex: 0,
};

export const appReducer = (state = initialState, action) => {
  switch (action.type) {
    case ACTION.APP.CHANGE_CURRENT_INDEX.REQUEST:
      return { ...state, currentIndex: action.currentIndex };
    default:
      return state;
  }
};
