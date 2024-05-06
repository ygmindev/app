import { withTest } from '@lib/shared/test/utils/withTest/withTest';
import { mapParallel } from '@tool/task/core/utils/mapParallel/mapParallel';

const { displayName } = withTest({ mapParallel });

describe(displayName, () => {
  test('works', async () => {
    const result = await mapParallel({});
    expect(result).toStrictEqual({});
  });
});
