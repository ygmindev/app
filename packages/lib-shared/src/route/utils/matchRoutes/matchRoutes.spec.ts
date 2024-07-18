import { withTest } from '@lib/shared/test/utils/withTest/withTest';
import { matchRoutes } from '@lib/shared/route/utils/matchRoutes/matchRoutes';

const { displayName } = withTest({ matchRoutes });

describe(displayName, () => {
  test('works', async () => {
    const result = await matchRoutes({});
    expect(result).toStrictEqual({});
  });
});
