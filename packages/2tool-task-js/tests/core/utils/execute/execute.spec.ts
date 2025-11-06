import { execute } from '@tool/task/core/utils/execute/execute';
import { withTest } from '@lib/shared/test/utils/withTest/withTest';

const { displayName } = withTest({ execute });

describe(displayName, () => {
  test('works', async () => {
    const result = await execute({});
    expect(result).toStrictEqual({});
  });
});
