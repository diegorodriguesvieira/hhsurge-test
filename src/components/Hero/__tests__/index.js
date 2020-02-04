import { render } from '@testing-library/react';
import React from 'react';

import Comic from '../index';

describe('Hero', () => {
  describe('Hero with all the information', () => {
    const mockComic = {
      cover: '/some/conver.jpg',
      description: 'Hello world!',
      title: 'Hello World!',
    };

    test('Should render <Hero />', () => {
      const { getByTestId } = render(<Comic {...mockComic} />);
      expect(getByTestId('hero-cover')).toBeInTheDocument();
      expect(getByTestId('hero-description')).toBeInTheDocument();
      expect(getByTestId('hero-title')).toBeInTheDocument();
    });
  });

  describe('Comic with all the empty information', () => {
    test('Should not render <Hero />', () => {
      const { queryByTestId } = render(<Comic />);
      expect(queryByTestId('hero-cover')).toBeNull();
      expect(queryByTestId('hero-description')).toBeNull();
      expect(queryByTestId('hero-title')).toBeNull();
    });
  });
});
