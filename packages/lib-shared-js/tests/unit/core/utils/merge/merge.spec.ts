import { merge } from '@lib/shared/core/utils/merge/merge';
import { MERGE_STRATEGY } from '@lib/shared/core/utils/merge/merge.constants';
import { withTest } from '@lib/shared/test/utils/withTest/withTest';
import cloneDeep from 'lodash/cloneDeep';

const { displayName } = withTest({ merge });

describe(displayName, () => {
  test('works', async () => {
    const a: Record<string, unknown> = { key1: 'a', key2: 'b' };
    const b: Record<string, unknown> = { key2: 'c', key3: 'd' };

    const result = merge([a, b]);
    expect(result).toStrictEqual({ key1: 'a', key2: 'b', key3: 'd' });
  });

  test('deep', async () => {
    const a: Record<string, unknown> = { key1: 'a', key2: 'b' };
    const b: Record<string, unknown> = { key2: 'c', key3: 'd' };
    a.nestedKey = cloneDeep(a);
    b.nestedKey = cloneDeep(b);

    const result = merge([a, b], MERGE_STRATEGY.DEEP);
    expect(result).toStrictEqual({
      key1: 'a',
      key2: 'b',
      key3: 'd',
      nestedKey: { key1: 'a', key2: 'b', key3: 'd' },
    });
  });

  test('deep append', async () => {
    const a: Record<string, unknown> = { key1: 'a', key2: ['b'] };
    const b: Record<string, unknown> = { key2: ['c'], key3: 'd' };
    a.nestedKey = cloneDeep(a);
    b.nestedKey = cloneDeep(b);

    const result = merge([a, b], MERGE_STRATEGY.DEEP_APPEND);
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
