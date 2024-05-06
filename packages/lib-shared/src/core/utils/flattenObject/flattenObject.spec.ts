import { flattenObject } from '@lib/shared/core/utils/flattenObject/flattenObject';
import { withTest } from '@lib/shared/test/utils/withTest/withTest';

const { displayName } = withTest({ flattenObject });

describe(displayName, () => {
  const VALUE = {
    $c: { ck: 'cv' },
    '%d': { dk: 'dv' },
    a: 'av',
    b: { bk: 'bv' },
    e: [{ ek1: 'ev1' }, { ek2: { ek2k: 'ek2v' } }],
  };

  test('works', async () => {
    const result = flattenObject(VALUE);
    expect(result).toEqual({
      $c: { ck: 'cv' },
      '%d.dk': 'dv',
      a: 'av',
      'b.bk': 'bv',
      e: [{ ek1: 'ev1' }, { 'ek2.ek2k': 'ek2v' }],
    });
  });

  test('works with delimiter', async () => {
    const result = flattenObject(VALUE, { delimiter: '/' });
    expect(result).toEqual({
      $c: { ck: 'cv' },
      '%d/dk': 'dv',
      a: 'av',
      'b/bk': 'bv',
      e: [{ ek1: 'ev1' }, { 'ek2/ek2k': 'ek2v' }],
    });
  });

  test('works with prefix', async () => {
    const result = flattenObject(VALUE, { prefixes: ['%'] });
    expect(result).toEqual({
      '$c.ck': 'cv',
      '%d': { dk: 'dv' },
      a: 'av',
      'b.bk': 'bv',
      e: [{ ek1: 'ev1' }, { 'ek2.ek2k': 'ek2v' }],
    });
  });
});
