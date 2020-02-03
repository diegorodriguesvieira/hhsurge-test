import { fireEvent } from '@testing-library/react';
import React from 'react';

import { renderWithRedux } from '../../../test';
import Template from '../index';

describe('Template', () => {
  test('Renders avatar with name', () => {
    const { getByTestId } = renderWithRedux(
      <Template>
        <p>Hello World</p>
      </Template>,
      { initialState: global.storeLoggedIn },
    );

    expect(getByTestId('avatar-name')).toHaveTextContent(global.loggedUser.name);
  });

  test('Should show logout button', () => {
    const { getByTestId } = renderWithRedux(
      <Template>
        <p>Hello World</p>
      </Template>,
      { initialState: global.storeLoggedIn },
    );

    fireEvent.click(getByTestId('avatar-button'));
    expect(getByTestId('avatar-logout-button')).toBeVisible();
  });
});
