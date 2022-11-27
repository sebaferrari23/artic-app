/** @format */

import { ACTION } from '~/constants';

export function loadArtworks(page) {
  return {
    type: ACTION.ARTWORKS.LOAD.REQUEST,
    page,
  };
}

export function toggleFav(artwork, onSuccess = null, onError = null) {
  return {
    type: ACTION.ARTWORKS.TOGGLE_FAV.REQUEST,
    artwork,
    onSuccess,
    onError,
  };
}
