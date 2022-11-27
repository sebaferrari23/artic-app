/** @format */

import { takeEvery, put, select } from 'redux-saga/effects';
import axios from 'axios';
import Config from 'react-native-config';

import { ACTION, FAVORITES } from '~/constants';
import { getSync, storeSync } from '~/utils';
import { artworksSelector } from '~/store/modules';

function* loadArtworksRequest(page) {
  const fetch = () => {
    return axios({
      url: `/artworks?page=${page}`,
      baseURL: Config.API_URL,
      method: 'GET',
    });
  };
  const mainResult = yield fetch();
  return mainResult;
}

function* loadArtworks({ page = 1 }) {
  try {
    const favorites = getSync(FAVORITES);
    const { data } = yield loadArtworksRequest(page);

    if (favorites) {
      data?.data?.forEach((artwork) => {
        const isFav = favorites.some((favorite) => favorite.id === artwork.id);
        artwork.favorite = isFav;
      });
    }

    yield put({ type: ACTION.ARTWORKS.LOAD.SUCCESS, artworks: data?.data });
  } catch (error) {
    console.log(error);
    yield put({ type: ACTION.ARTWORKS.LOAD.FAILURE });
  }
}

function* toggleFav({ artwork, onSuccess, onError }) {
  try {
    const { artworks } = yield select(artworksSelector);

    artworks.forEach((artworkItem) => {
      if (artworkItem.id === artwork.id) {
        artworkItem.favorite = !artwork.favorite;
      }
    });

    const favArtworks = artworks.filter((favArtwork) => favArtwork.favorite);
    storeSync(FAVORITES, favArtworks);
    yield put({ type: ACTION.ARTWORKS.TOGGLE_FAV.SUCCESS, artworks: artworks });
    onSuccess();
  } catch (error) {
    console.log(error);
    yield put({ type: ACTION.ARTWORKS.TOGGLE_FAV.FAILURE });
    onError();
  }
}

export function* artworksSaga() {
  yield takeEvery(ACTION.ARTWORKS.LOAD.REQUEST, loadArtworks);
  yield takeEvery(ACTION.ARTWORKS.TOGGLE_FAV.REQUEST, toggleFav);
}
