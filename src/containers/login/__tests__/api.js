import axios from 'axios';

import * as api from '../api';

describe('Api', () => {
  jest.clearAllMocks();
  jest.fn(api.login);

  test('Should return users', async () => {
    axios.get.mockImplementationOnce(() => Promise.resolve({ data: [global.mockUser] }));
    await expect(api.login()).resolves.toEqual({ data: [global.mockUser] });
  });
});
