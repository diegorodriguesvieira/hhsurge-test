import { render, fireEvent, wait } from '@testing-library/react';
import React from 'react';

import Form from '../Form';

describe('Form', () => {
  test('Returns the submitted values', async () => {
    const mock = jest.fn();
    const { container } = render(<Form onSubmit={mock} />);
    const usernameField = container.querySelector('input[name="username"]');
    const passwordField = container.querySelector('input[name="password"]');
    const button = container.querySelector('button[type="submit"]');
    const usernameValue = 'username@example.com';
    const passwordValue = 'password';

    await wait(() => {
      fireEvent.change(usernameField, {
        target: {
          value: usernameValue,
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

    const { username, password } = mock.mock.calls[0][0];

    expect(mock).toBeCalledTimes(1);
    expect(username).toBe(usernameValue);
    expect(password).toBe(passwordValue);
  });

  test('Should show validation on blur', async () => {
    const mock = jest.fn();
    const { container } = render(<Form onSubmit={mock} />);
    const usernameField = container.querySelector('input[name="username"]');
    const passwordField = container.querySelector('input[name="password"]');

    await wait(() => {
      fireEvent.blur(usernameField);
      fireEvent.blur(passwordField);
    });

    await wait(() => {
      expect(container.querySelector('#username-helper-text')).toBeInTheDocument();
      expect(container.querySelector('#password-helper-text')).toBeInTheDocument();
    });
  });
});
