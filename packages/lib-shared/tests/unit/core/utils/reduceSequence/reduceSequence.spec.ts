import { reduceSequence } from '@lib/shared/core/utils/reduceSequence/reduceSequence';
import { withTest } from '@lib/shared/test/utils/withTest/withTest';

const { displayName } = withTest({ reduceSequence });

describe(displayName, () => {
  test('works with array', async () => {
    const result = await reduceSequence(
      [1, 2, 3],
      async (result, v) => [...result, v + 1],
      [] as Array<number>,
    );
    expect(result).toStrictEqual([2, 3, 4]);
  });

  test('works with object', async () => {
    const result = await reduceSequence(
      { a: 1, b: 2, c: 3 },
      async (result, v, k) => ({ ...result, [k]: v + 1 }),
      {},
    );
    expect(result).toStrictEqual({ a: 2, b: 3, c: 4 });
  });
});
