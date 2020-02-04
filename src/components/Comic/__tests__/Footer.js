import { render } from '@testing-library/react';
import React from 'react';

import Footer from '../Footer';

describe('Footer', () => {
  test('Should render <Footer />', async () => {
    const { getByTestId } = render(<Footer url="/some/url" />);
    expect(getByTestId('comic-more-details')).toBeInTheDocument();
  });

  test('Should not render <Footer />', async () => {
    const { queryByTestId } = render(<Footer url="" />);
    expect(queryByTestId('comic-more-details')).toBeNull();
  });
});
