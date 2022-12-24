import { merge } from '@lib/shared/core/utils/merge/merge';
import { MERGE_STRATEGY } from '@lib/shared/core/utils/merge/merge.constants';
import { withTest } from '@lib/shared/test/utils/withTest/withTest';
import { cloneDeep } from 'lodash';

const { displayName } = withTest({ target: () => merge });

describe(displayName, () => {
  test('works', async () => {
    const a: Record<string, unknown> = { key1: 'a', key2: 'b' };
    const b: Record<string, unknown> = { key2: 'c', key3: 'd' };

    const result = merge({ values: [a, b] });
    expect(result).toStrictEqual({ key1: 'a', key2: 'b', key3: 'd' });
  });

  test('works with deep', async () => {
    const a: Record<string, unknown> = { key1: 'a', key2: 'b' };
    const b: Record<string, unknown> = { key2: 'c', key3: 'd' };
    a.nestedKey = cloneDeep(a);
    b.nestedKey = cloneDeep(b);

    const result = merge({ strategy: MERGE_STRATEGY.DEEP, values: [a, b] });
    expect(result).toStrictEqual({
      key1: 'a',
      key2: 'b',
      key3: 'd',
      nestedKey: { key1: 'a', key2: 'b', key3: 'd' },
    });
  });

  test('works with deep append', async () => {
    const a: Record<string, unknown> = { key1: 'a', key2: ['b'] };
    const b: Record<string, unknown> = { key2: ['c'], key3: 'd' };
    a.nestedKey = cloneDeep(a);
    b.nestedKey = cloneDeep(b);

    const result = merge({ strategy: MERGE_STRATEGY.DEEP_APPEND, values: [a, b] });
    expect(result).toStrictEqual({
      key1: 'a',
      key2: ['c', 'b'],
      key3: 'd',
      nestedKey: {
        key1: 'a',
        key2: ['c', 'b'],
        key3: 'd',
      },
    });
  });
});
