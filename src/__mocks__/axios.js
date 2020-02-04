export default {
  get: jest.fn().mockResolvedValue({ data: {} }),
  create: jest.fn().mockReturnValue({ interceptors: { request: { use: jest.fn() } } }),
};
