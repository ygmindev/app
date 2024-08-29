import { withTest } from '@lib/shared/test/utils/withTest/withTest';
import { runParallel } from '@tool/task/core/utils/runParallel/runParallel';

const { displayName } = withTest({ runParallel });

describe(displayName, () => {
  test('works', async () => {
    const result = await runParallel({});
    expect(result).toStrictEqual({});
  });
});
