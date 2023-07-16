import { sequence } from '#lib-shared/core/utils/sequence/sequence';
import { withTest } from '#lib-shared/test/utils/withTest/withTest';

const { displayName } = withTest({ sequence });

describe(displayName, () => {
  test('works', async () => {
    const PROMISES = [
      async () => Promise.resolve(1),
      async () => Promise.resolve(2),
      async () => Promise.resolve(3),
    ];
    const result = await sequence(PROMISES);
    expect(result).toStrictEqual([1, 2, 3]);
  });
});
