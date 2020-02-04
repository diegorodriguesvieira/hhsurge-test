import { render } from '@testing-library/react';
import React from 'react';

import Description from '../index';

describe('Description', () => {
  const testId = 'description-id';

  test('Should render <Description />', () => {
    const { getByTestId } = render(<Description testId={testId} data="Hello world!" />);
    expect(getByTestId(testId)).toBeInTheDocument();
  });

  test('Should not render <Description />', () => {
    const { queryByTestId } = render(<Description testId={testId} data="" />);
    expect(queryByTestId(testId)).toBeNull();
  });
});
