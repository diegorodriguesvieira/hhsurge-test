import { render } from '@testing-library/react';
import React from 'react';

import Cover from '../index';

describe('Cover', () => {
  const testId = 'cover-id';

  test('Should render <Cover />', () => {
    const { getByTestId } = render(<Cover testId={testId} src="src.jpg" />);
    expect(getByTestId(testId)).toBeInTheDocument();
  });

  test('Should not render <Cover />', () => {
    const { queryByTestId } = render(<Cover testId={testId} src="" />);
    expect(queryByTestId(testId)).toBeNull();
  });
});
