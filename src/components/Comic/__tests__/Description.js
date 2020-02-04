import { render } from '@testing-library/react';
import React from 'react';

import Description from '../Description';

describe('Description', () => {
  test('Should render <Description />', async () => {
    const { getByTestId } = render(<Description data="Hello world!" />);
    expect(getByTestId('comic-description')).toBeInTheDocument();
  });

  test('Should not render <Description />', async () => {
    const { queryByTestId } = render(<Description data="" />);
    expect(queryByTestId('comic-description')).toBeNull();
  });
});
