import { put, call, takeLatest } from 'redux-saga/effects';

import * as api from './api';
import * as helpers from './helpers';
import * as utils from '../../utils';

export const LOGIN_REQUEST = 'app/auth/LOGIN_REQUEST';
export const LOGIN_LOADING = 'app/auth/LOGIN_LOADING';
export const LOGIN_SUCCESS = 'app/auth/LOGIN_SUCCESS';
export const LOGIN_FAILURE = 'app/auth/LOGIN_FAILURE';

export const LOGOUT_REQUEST = 'app/auth/LOGOUT_REQUEST';
export const LOGOUT_SUCESS = 'app/auth/LOGOUT_SUCCESS';
export const LOGOUT_FAILURE = 'app/auth/LOGOUT_FAILURE';

const INITIAL_STATE = {
  user: helpers.isLoggedIn(),
  loginError: null,
  loginLoading: false,
};

export default (state = INITIAL_STATE, { type, payload }) => {
  switch (type) {
    case LOGIN_SUCCESS:
      return { ...state, user: payload };

    case LOGIN_FAILURE:
      return { ...state, loginError: payload };

    case LOGIN_LOADING:
      return { ...state, loginLoading: payload };

    default:
      return state;
  }
};

export function login(credentials) {
  return { type: LOGIN_REQUEST, payload: credentials };
}

export function* loginSaga({ payload }) {
  try {
    yield put({ type: LOGIN_LOADING, payload: true });
    yield utils.delay(500);

    const { data } = yield call(api.login);
    const user = helpers.findUser(data, payload.username, payload.password);

    if (user) {
      helpers.setUserLocalStorage(user);
      yield put({ type: LOGIN_SUCCESS, payload: user });
    } else {
      throw Error();
    }
  } catch (error) {
    yield put({ type: LOGIN_FAILURE, payload: true });
  } finally {
    yield put({ type: LOGIN_LOADING, payload: false });
  }
}

export function* watchLogin() {
  yield takeLatest(LOGIN_REQUEST, loginSaga);
}
