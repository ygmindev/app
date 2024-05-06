import { withTest } from '@lib/shared/test/utils/withTest/withTest';
import { cli } from '@tool/task/core/utils/cli/cli';

const { displayName } = withTest({ cli });

describe(displayName, () => {
  test('works', async () => {
    const result = await cli();
    expect(result).toStrictEqual({});
  });
});
