import { render } from '@testing-library/react';
import React from 'react';

import Infos from '../Infos';

describe('Infos', () => {
  test('Should render <Infos />', async () => {
    const { getByTestId } = render(<Infos data={['Edition nº 1', 'Comic', '40 pages']} />);
    expect(getByTestId('comic-info-0')).toBeInTheDocument();
  });

  test('Should not render <Infos />', async () => {
    const { queryByTestId } = render(<Infos data={[]} />);
    expect(queryByTestId('comic-info-0')).toBeNull();
  });
});
