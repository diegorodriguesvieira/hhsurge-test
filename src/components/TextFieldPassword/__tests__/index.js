import { render, fireEvent } from '@testing-library/react';
import React from 'react';
import TextFieldPassword from '..';

describe('TextFieldPassword', () => {
  test('Should unmask password on click', () => {
    const { getByTestId } = render(<TextFieldPassword />);
    fireEvent.click(getByTestId('btn-show-password'));
    expect(getByTestId('text-field-password')).toHaveAttribute('type', 'text');
  });

  test('Should mask password on click', () => {
    const { getByTestId } = render(<TextFieldPassword />);
    fireEvent.click(getByTestId('btn-show-password'));
    fireEvent.click(getByTestId('btn-show-password'));
    expect(getByTestId('text-field-password')).toHaveAttribute('type', 'password');
  });
});
