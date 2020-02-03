// jest-dom adds custom jest matchers for asserting on DOM nodes.
// allows you to do things like:
// expect(element).toHaveTextContent(/react/i)
// learn more: https://github.com/testing-library/jest-dom
import '@testing-library/jest-dom/extend-expect';

const localStorage = (() => {
  let store = {};

  return {
    getItem: jest.fn(key => store[key]),
    setItem: jest.fn((key, value) => {
      store[key] = value;
    }),
    clear: jest.fn(() => {
      store = {};
    }),
    removeItem: jest.fn(key => {
      delete store[key];
    }),
  };
})();

Object.defineProperty(window, 'localStorage', {
  value: localStorage,
  writable: true,
});

global.mockUser = {
  name: 'Bryon Hooper',
  user: 'bryon',
  email: 'bryon_hooper4381@muall.tech',
  password: 714941,
  heroId: 1009726,
};

global.mockUser2 = {
  name: 'Adina Yang',
  user: 'adina',
  email: 'adina_yang1351@yahoo.com',
  password: 315492,
  heroId: 1011299,
};

global.mockUsers = [global.mockUser, global.mockUser2];

global.loggedUser = global.mockUser;

global.storeLoggedIn = { auth: { user: global.loggedUser } };
