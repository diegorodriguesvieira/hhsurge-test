import { render } from '@testing-library/react';
import React from 'react';

import Title from '..';

describe('TextFieldPassword', () => {
  test('Should unmask password on click', () => {
    const text = 'Hello World!';
    const { getByText } = render(<Title>{text}</Title>);
    expect(getByText(text)).toBeInTheDocument();
  });
});
