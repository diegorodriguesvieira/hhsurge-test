import { takeLatest, put } from 'redux-saga/effects';

import * as api from '../api';

import reducer, {
  LOGIN_FAILURE,
  LOGIN_LOADING,
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
  login,
  loginSaga,
  watchLogin,
} from '../ducks';

describe('Ducks', () => {
  describe('Actions', () => {
    test('Should create an action with correct type', () => {
      const expectedAction = {
        type: LOGIN_REQUEST,
        payload: undefined,
      };
      expect(login()).toEqual(expectedAction);
    });
  });

  describe('Reducer', () => {
    test('Should return the initial state', () => {
      expect(reducer({}, {})).toEqual({});
    });

    test(`Should handle LOGIN_SUCCESS action`, () => {
      expect(reducer({}, { type: LOGIN_SUCCESS, payload: global.mockUser })).toEqual({
        user: global.mockUser,
      });
    });

    test(`Should handle LOGIN_FAILURE action`, () => {
      const mockError = true;
      expect(reducer({}, { type: LOGIN_FAILURE, payload: mockError })).toEqual({
        loginError: mockError,
      });
    });

    test(`Should handle LOGIN_LOADING action`, () => {
      const mockLoading = false;
      expect(reducer({}, { type: LOGIN_LOADING, payload: mockLoading })).toEqual({
        loginLoading: mockLoading,
      });
    });
  });

  describe('Sagas', () => {
    jest.clearAllMocks();
    jest.fn(api.login);

    test(`Should dispatch action LOGIN_REQUEST`, () => {
      const generator = watchLogin();
      expect(generator.next().value).toEqual(takeLatest(LOGIN_REQUEST, loginSaga));
      expect(generator.next().done).toBeTruthy();
    });

    describe('Login success flow', () => {
      const generator = loginSaga({
        payload: { username: global.mockUser.user, password: global.mockUser.password },
      });

      test('it waits for a LOGIN_LOADING action', () => {
        expect(generator.next().value).toEqual(put({ type: LOGIN_LOADING, payload: true }));
      });

      test('then it waits for a promise delay', () => {
        expect(generator.next().value).toBeInstanceOf(Promise);
      });

      test('then success login and it waits for a LOGIN_SUCCESS action', () => {
        generator.next();

        expect(generator.next({ data: [global.mockUser] }).value).toEqual(
          put({ type: LOGIN_SUCCESS, payload: global.mockUser }),
        );
      });

      test('then it waits for a LOGIN_LOADING action', () => {
        expect(generator.next().value).toEqual(put({ type: LOGIN_LOADING, payload: false }));
        expect(generator.next().done).toBeTruthy();
      });
    });

    describe('Login error flow', () => {
      const generator = loginSaga({
        payload: { username: global.mockUser.user, password: global.mockUser.password },
      });

      generator.next();
      generator.next();

      test('it waits for a LOGIN_FAILURE', () => {
        generator.next();

        expect(generator.next({ data: [] }).value).toEqual(
          put({ type: LOGIN_FAILURE, payload: true }),
        );
      });

      test('then it waits for a LOGIN_LOADING action', () => {
        expect(generator.next().value).toEqual(put({ type: LOGIN_LOADING, payload: false }));
        expect(generator.next().done).toBeTruthy();
      });
    });
  });
});
