/** @format */

import { createActionConst } from '~/utils';

export const ACTION = createActionConst('ACTION', {
  APP: {
    CHANGE_CURRENT_INDEX: {},
  },
  ARTWORKS: {
    LOAD: {},
    TOGGLE_FAV: {},
  },
});
