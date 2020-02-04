import { put, call, takeLatest } from 'redux-saga/effects';

import * as api from './api';

export const HERO_COMICS_REQUEST = 'app/auth/HERO_COMICS_REQUEST';
export const HERO_COMICS_LOADING = 'app/auth/HERO_COMICS_LOADING';
export const HERO_COMICS_SUCCESS = 'app/auth/HERO_COMICS_SUCCESS';
export const HERO_COMICS_FAILURE = 'app/auth/HERO_COMICS_FAILURE';

export const HERO_CHARACTER_REQUEST = 'app/auth/HERO_CHARACTER_REQUEST';
export const HERO_CHARACTER_LOADING = 'app/auth/HERO_CHARACTER_LOADING';
export const HERO_CHARACTER_SUCCESS = 'app/auth/HERO_CHARACTER_SUCCESS';
export const HERO_CHARACTER_FAILURE = 'app/auth/HERO_CHARACTER_FAILURE';

const INITIAL_STATE = {
  character: null,
  comics: null,
  errorCharacter: false,
  errorComics: false,
  loadingCharacter: false,
  loadingComics: false,
};

export default (state = INITIAL_STATE, { type, payload }) => {
  switch (type) {
    case HERO_COMICS_LOADING:
      return { ...state, loadingComics: payload };

    case HERO_COMICS_SUCCESS:
      return { ...state, comics: payload };

    case HERO_COMICS_FAILURE:
      return { ...state, errorComics: payload };

    case HERO_CHARACTER_LOADING:
      return { ...state, loadingCharacter: payload };

    case HERO_CHARACTER_SUCCESS:
      return { ...state, character: payload };

    case HERO_CHARACTER_FAILURE:
      return { ...state, errorCharacter: payload };

    default:
      return state;
  }
};

export function getComics(characterId) {
  return { type: HERO_COMICS_REQUEST, payload: characterId };
}

export function getCharacter(characterId) {
  return { type: HERO_CHARACTER_REQUEST, payload: characterId };
}

export function* fetchComicsSaga({ payload }) {
  try {
    yield put({ type: HERO_COMICS_LOADING, payload: true });
    const { data } = yield call(api.getComicsByCharacterId, payload);
    yield put({ type: HERO_COMICS_SUCCESS, payload: data.data.results });
  } catch (error) {
    yield put({ type: HERO_COMICS_FAILURE, payload: true });
  } finally {
    yield put({ type: HERO_COMICS_LOADING, payload: false });
  }
}

export function* getHeroSaga({ payload }) {
  try {
    yield put({ type: HERO_CHARACTER_LOADING, payload: true });
    const { data } = yield call(api.getCharacterById, payload);
    yield put({ type: HERO_CHARACTER_SUCCESS, payload: data.data.results[0] });
  } catch (error) {
    yield put({ type: HERO_CHARACTER_FAILURE, payload: true });
  } finally {
    yield put({ type: HERO_CHARACTER_LOADING, payload: false });
  }
}

export function* watchGetComics() {
  yield takeLatest(HERO_COMICS_REQUEST, fetchComicsSaga);
}

export function* watchGetCharacter() {
  yield takeLatest(HERO_CHARACTER_REQUEST, getHeroSaga);
}
