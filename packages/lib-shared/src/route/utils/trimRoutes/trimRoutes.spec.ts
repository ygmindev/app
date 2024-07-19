import { trimRoutes } from '@lib/shared/route/utils/trimRoutes/trimRoutes';
import { withTest } from '@lib/shared/test/utils/withTest/withTest';

const { displayName } = withTest({ trimRoutes });

describe(displayName, () => {
  test('works', async () => {
    const result = await trimRoutes({});
    expect(result).toStrictEqual({});
  });
});
