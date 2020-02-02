import '@testing-library/jest-dom/extend-expect';
import { createMemoryHistory } from 'history';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import { render } from '@testing-library/react';
import { Router } from 'react-router-dom';
import React from 'react';

import App from '../index';
import reducer from '../../reducers';

function renderWithRedux(ui, { initialState, store = createStore(reducer, initialState) } = {}) {
  return {
    ...render(<Provider store={store}>{ui}</Provider>),
    // adding `store` to the returned utilities to allow us
    // to reference it in our tests
    store,
  };
}

describe('Routes', () => {
  const user = { name: 'Diego' };

  test('Renders private route if logged in', () => {
    const history = createMemoryHistory();
    history.push('/');
    const { getByTestId } = renderWithRedux(
      <Router history={history}>
        <App />
      </Router>,
      { initialState: { auth: { user } } },
    );
    expect(getByTestId('home')).toBeTruthy();
  });

  test('Renders the login page if logged out', () => {
    const history = createMemoryHistory();
    history.push('/');
    const { getByTestId } = renderWithRedux(
      <Router history={history}>
        <App />
      </Router>,
      { initialState: { auth: { user: null } } },
    );
    expect(getByTestId('login')).toBeTruthy();
  });

  test('Renders the 404 page if an invalid url is loaded', () => {
    const history = createMemoryHistory();
    history.push('/wrong/url');
    const { getByTestId } = renderWithRedux(
      <Router history={history}>
        <App />
      </Router>,
    );
    expect(getByTestId('404')).toBeTruthy();
  });

  test('Render the home page if access the login page already logged in', () => {
    const history = createMemoryHistory();
    history.push('/login');
    const { getByTestId } = renderWithRedux(
      <Router history={history}>
        <App />
      </Router>,
      { initialState: { auth: { user } } },
    );
    expect(getByTestId('home')).toBeTruthy();
  });
});
