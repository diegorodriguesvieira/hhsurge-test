import { render } from '@testing-library/react';
import React from 'react';

import Header from '../Header';

describe('Header', () => {
  test('Should render title', async () => {
    const { getByTestId } = render(<Header title="Hello world!" creators="" />);
    expect(getByTestId('comic-title')).toBeInTheDocument();
  });

  test('Should not render title', async () => {
    const { queryByTestId } = render(<Header title="" creators="" />);
    expect(queryByTestId('comic-title')).toBeNull();
  });

  test('Should render creators', async () => {
    const { getByTestId } = render(<Header title="" creators="john doe / jane doe" />);
    expect(getByTestId('comic-creators')).toBeInTheDocument();
  });

  test('Should not render creators', async () => {
    const { queryByTestId } = render(<Header title="" creators="" />);
    expect(queryByTestId('comic-creators')).toBeNull();
  });
});
