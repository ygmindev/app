import { withTest } from '@lib/shared/test/utils/withTest/withTest';
import { groupBy } from '@lib/shared/core/utils/groupBy/groupBy';

const { displayName } = withTest({ target: () => groupBy });

describe(displayName, () => {
  test('works', async () => {
    const result = await groupBy({});
    expect(result).toStrictEqual({});
  });
});
