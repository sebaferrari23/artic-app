/** @format */

import { createSelector } from 'reselect';

export const artworksSelector = createSelector(
  (state) => state.artworks,
  (artworks) => artworks,
);
