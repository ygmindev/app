import { flattenObject } from '@lib/shared/core/utils/flattenObject/flattenObject';
import { withTest } from '@lib/shared/test/utils/withTest/withTest';

const { displayName } = withTest({ target: () => flattenObject });

describe(displayName, () => {
  const VALUE = {
    $c: { c: 'c' },
    '%d': { d: 'd' },
    a: 'a',
    b: { b: 'b' },
  };

  test('works', async () => {
    const result = flattenObject({ value: VALUE });
    expect(result).toEqual({ $c: { c: 'c' }, '%d.d': 'd', a: 'a', 'b.b': 'b' });
  });

  test('works with delimiter', async () => {
    const result = flattenObject({ delimiter: '/', value: VALUE });
    expect(result).toEqual({ $c: { c: 'c' }, '%d/d': 'd', a: 'a', 'b/b': 'b' });
  });

  test('works with prefix', async () => {
    const result = flattenObject({ prefixes: ['%'], value: VALUE });
    expect(result).toEqual({ '$c.c': 'c', '%d': { d: 'd' }, a: 'a', 'b.b': 'b' });
  });
});
