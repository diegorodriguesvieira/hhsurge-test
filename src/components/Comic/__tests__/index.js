import { render } from '@testing-library/react';
import React from 'react';

import Comic from '../index';

describe('Comic', () => {
  describe('Comic with all the information', () => {
    const mockComic = {
      cover: '/some/conver.jpg',
      creators: 'john doe / jane doe',
      description: 'Hello world!',
      edition: 'Edition nº 1',
      format: 'Comic',
      moreDetails: '/some/url',
      pages: '10 pages',
      title: 'Hello World!',
    };

    test('Should render <Cover />', async () => {
      const { getByTestId } = render(<Comic {...mockComic} />);
      expect(getByTestId('comic-cover')).toBeInTheDocument();
      expect(getByTestId('comic-description')).toBeInTheDocument();
      expect(getByTestId('comic-more-details')).toBeInTheDocument();
      expect(getByTestId('comic-title')).toBeInTheDocument();
      expect(getByTestId('comic-creators')).toBeInTheDocument();
      expect(getByTestId('comic-info-0')).toBeInTheDocument();
    });
  });

  describe('Comic with all the empty information', () => {
    test('Should not render <Cover />', async () => {
      const { queryByTestId } = render(<Comic />);
      expect(queryByTestId('comic-cover')).toBeNull();
      expect(queryByTestId('comic-description')).toBeNull();
      expect(queryByTestId('comic-more-details')).toBeNull();
      expect(queryByTestId('comic-title')).toBeNull();
      expect(queryByTestId('comic-creators')).toBeNull();
      expect(queryByTestId('comic-info-0')).toBeNull();
    });
  });
});
