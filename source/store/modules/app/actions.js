/** @format */

import { ACTION } from '~/constants';

export function changeCurrentIndexTab(currentIndex) {
  return {
    type: ACTION.APP.CHANGE_CURRENT_INDEX.REQUEST,
    currentIndex,
  };
}
