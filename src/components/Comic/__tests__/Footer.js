import { render, fireEvent } from '@testing-library/react';
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

  test('Should not render <Footer />', async () => {
    const { queryByTestId } = render(<Footer url="" />);
    expect(queryByTestId('comic-more-details')).toBeNull();
  });

  test('Should call window.open once', async () => {
    jest.spyOn(window, 'open').mockImplementationOnce(() => {
      return true;
    });

    const mockUrl = '/some/url';
    const { getByTestId } = render(<Footer url={mockUrl} />);

    fireEvent.click(getByTestId('comic-more-details'));

    expect(window.open).toBeCalledTimes(1);
    expect(window.open).toBeCalledWith(mockUrl, '_blank');
    expect(window.open).toBeTruthy();
  });
});
