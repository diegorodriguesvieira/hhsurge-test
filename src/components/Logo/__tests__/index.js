import { render } from '@testing-library/react';
import React from 'react';

import Logo from '..';

describe('Logo', () => {
  test('Renders logo', () => {
    const { getByTestId } = render(<Logo />);
    expect(getByTestId('logo')).toBeInTheDocument();
  });
});
