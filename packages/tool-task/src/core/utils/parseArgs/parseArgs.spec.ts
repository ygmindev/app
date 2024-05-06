import { withTest } from '@lib/shared/test/utils/withTest/withTest';
import { parseArgs } from '@tool/task/core/utils/parseArgs/parseArgs';

const { displayName } = withTest({ parseArgs });

describe(displayName, () => {
  test('works', async () => {
    const result = parseArgs();
    expect(result).toStrictEqual({});
  });
});
