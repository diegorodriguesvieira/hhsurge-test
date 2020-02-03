import theme from '../theme';

describe('theme', () => {
  test('Returns a theme object', () => {
    const array = [
      'breakpoints',
      'direction',
      'mixins',
      'overrides',
      'palette',
      'props',
      'shadows',
      'shape',
      'spacing',
      'transitions',
      'typography',
      'zIndex',
    ];
    expect(array).toEqual(expect.arrayContaining(Object.keys(theme)));
  });
});
