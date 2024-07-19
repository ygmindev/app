import { withTest } from '@lib/shared/test/utils/withTest/withTest';
import { matchRoute } from '@lib/shared/route/utils/matchRoute/matchRoute';

const { displayName } = withTest({ matchRoute });

describe(displayName, () => {
  test('works', async () => {
    const result = await matchRoute({});
    expect(result).toStrictEqual({});
  });
});
