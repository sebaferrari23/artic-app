/** @format */

import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import { spawn } from 'redux-saga/effects';
import createSagaMiddleware from 'redux-saga';

import { appReducer, artworksReducer, artworksSaga } from './modules';

const appGlobalReducer = combineReducers({
  app: appReducer,
  artworks: artworksReducer,
});

const reducers = (state, action) => {
  return appGlobalReducer(state, action);
};

function* sagas() {
  yield spawn(artworksSaga);
}

const sagaMiddleware = createSagaMiddleware();
const middlewares = [sagaMiddleware];

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
export const store = createStore(reducers, composeEnhancers(applyMiddleware(...middlewares)));

sagaMiddleware.run(sagas);
