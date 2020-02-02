import { isLoggedIn } from '../index';

describe('helpers', () => {
  describe('isLoggedIn', () => {
    const user = { name: 'Diego' };

    test('Returns the logged in user', () => {
      window.localStorage.setItem('user', user);
      expect(isLoggedIn()).toMatchObject(user);
    });

    test('Returns undefined if the user logs out', () => {
      window.localStorage.removeItem('user', user);
      expect(isLoggedIn()).toBeUndefined();
    });
  });
});
