/** @format */

import { createSelector } from 'reselect';

export const appSelector = createSelector(
  (state) => state.app,
  (app) => app,
);
