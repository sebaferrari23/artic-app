/** @format */

import { ACTION } from '~/constants';

const initialState = {
  isLoadingArtworks: false,
  isLoadingFav: false,
  error: false,
  artworks: [],
};

export const artworksReducer = (state = initialState, action) => {
  switch (action.type) {
    case ACTION.ARTWORKS.LOAD.REQUEST:
      return { ...state, isLoadingArtworks: true, error: false };
    case ACTION.ARTWORKS.LOAD.SUCCESS:
      return { ...state, isLoadingArtworks: false, artworks: [...state.artworks, ...action.artworks], error: false };
    case ACTION.ARTWORKS.LOAD.FAILURE:
      return { ...state, isLoadingArtworks: false, error: true };
    case ACTION.ARTWORKS.TOGGLE_FAV.REQUEST:
      return { ...state, isLoadingFav: true, error: false };
    case ACTION.ARTWORKS.TOGGLE_FAV.SUCCESS:
      return { ...state, isLoadingFav: false, artworks: action.artworks, error: false };
    case ACTION.ARTWORKS.TOGGLE_FAV.FAILURE:
      return { ...state, isLoadingFav: false, error: true };
    default:
      return state;
  }
};
