import { put, call, takeLatest } from 'redux-saga/effects';

import * as api from './api';

export const HOME_COMICS_REQUEST = 'app/auth/HOME_COMICS_REQUEST';
export const HOME_COMICS_LOADING = 'app/auth/HOME_COMICS_LOADING';
export const HOME_COMICS_SUCCESS = 'app/auth/HOME_COMICS_SUCCESS';
export const HOME_COMICS_FAILURE = 'app/auth/HOME_COMICS_FAILURE';

const INITIAL_STATE = {
  items: null,
  error: false,
  loading: false,
};

export default (state = INITIAL_STATE, { type, payload }) => {
  switch (type) {
    case HOME_COMICS_LOADING:
      return { ...state, loading: payload };

    case HOME_COMICS_SUCCESS:
      return { ...state, items: payload };

    case HOME_COMICS_FAILURE:
      return { ...state, error: payload };

    default:
      return state;
  }
};

export function getComics(characterId) {
  return { type: HOME_COMICS_REQUEST, payload: characterId };
}

export function* fetchComicsSaga({ payload }) {
  try {
    yield put({ type: HOME_COMICS_LOADING, payload: true });
    const { data } = yield call(api.getComicsByCharacterId, payload);
    yield put({ type: HOME_COMICS_SUCCESS, payload: data.data.results });
  } catch (error) {
    yield put({ type: HOME_COMICS_FAILURE, payload: true });
  } finally {
    yield put({ type: HOME_COMICS_LOADING, payload: false });
  }
}

export function* watchGetComics() {
  yield takeLatest(HOME_COMICS_REQUEST, fetchComicsSaga);
}
