import { render, fireEvent, wait } from '@testing-library/react';
import React from 'react';

import Form from '../Form';

describe('Form', () => {
  test('Returns the submitted values', async () => {
    const mock = jest.fn();
    const { container } = render(<Form onSubmit={mock} />);
    const emailField = container.querySelector('input[name="email"]');
    const passwordField = container.querySelector('input[name="password"]');
    const button = container.querySelector('button[type="submit"]');
    const emailValue = 'email@example.com';
    const passwordValue = 'password';

    await wait(() => {
      fireEvent.change(emailField, {
        target: {
          value: emailValue,
        },
      });
    });

    await wait(() => {
      fireEvent.change(passwordField, {
        target: {
          value: passwordValue,
        },
      });
    });

    await wait(() => {
      fireEvent.click(button);
    });

    const { email, password } = mock.mock.calls[0][0];

    expect(mock).toBeCalledTimes(1);
    expect(email).toBe(emailValue);
    expect(password).toBe(passwordValue);
  });

  test('Should show validation on blur', async () => {
    const mock = jest.fn();
    const { container } = render(<Form onSubmit={mock} />);
    const emailField = container.querySelector('input[name="email"]');
    const passwordField = container.querySelector('input[name="password"]');

    await wait(() => {
      fireEvent.blur(emailField);
      fireEvent.blur(passwordField);
    });

    await wait(() => {
      expect(container.querySelector('#email-helper-text')).toBeInTheDocument();
      expect(container.querySelector('#password-helper-text')).toBeInTheDocument();
    });
  });
});
