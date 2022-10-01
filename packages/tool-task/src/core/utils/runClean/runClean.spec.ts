import { withTest } from '@lib/shared/testing/utils/withTest/withTest';
import { runClean } from '@tool/task/core/utils/runClean/runClean';

const { displayName } = withTest({ target: () => runClean });

describe(displayName, () => {
  test('works', async () => {
    const result = await runClean({ root: '' });
    expect(result).toStrictEqual({});
  });
});
