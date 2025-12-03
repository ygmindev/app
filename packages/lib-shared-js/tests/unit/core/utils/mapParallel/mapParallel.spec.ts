import { mapParallel } from '@lib/shared/core/utils/mapParallel/mapParallel';
import { withTest } from '@lib/shared/test/utils/withTest/withTest';

const { displayName } = withTest({ mapParallel });

describe(displayName, () => {
  test('works', async () => {
    const PROMISES = [Promise.resolve(1), Promise.resolve(2), Promise.resolve(3)];
    const result = await mapParallel(PROMISES);
    expect(result).toStrictEqual([1, 2, 3]);
  });
});
