import * as redux from 'redux';

import configureStore from '../configureStore';

describe('configureStore', () => {
  jest.spyOn(redux, 'createStore');

  beforeEach(() => jest.clearAllMocks());

  describe('given no initial state', () => {
    it('calls createStore with no initial state', () => {
      expect(configureStore()).toBeInstanceOf(Object);
      expect(redux.createStore).toHaveBeenCalledWith(
        expect.any(Function),
        undefined,
        expect.any(Function),
      );
    });
  });

  describe('given initial state', () => {
    it('calls createStore with initial state', () => {
      const initialState = {};
      expect(configureStore(initialState)).toBeInstanceOf(Object);
      expect(redux.createStore).toHaveBeenCalledWith(
        expect.any(Function),
        expect.any(Object),
        expect.any(Function),
      );
    });
  });
});
