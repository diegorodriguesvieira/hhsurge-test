import { render } from '@testing-library/react';
import React from 'react';

import Cover from '../Cover';

describe('Cover', () => {
  test('Should render <Cover />', async () => {
    const { getByTestId } = render(<Cover src="src.jpg" />);
    expect(getByTestId('comic-cover')).toBeInTheDocument();
  });

  test('Should not render <Cover />', async () => {
    const { queryByTestId } = render(<Cover src="" />);
    expect(queryByTestId('comic-cover')).toBeNull();
  });
});
