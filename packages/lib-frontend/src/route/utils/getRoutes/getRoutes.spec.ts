import { getRoutes } from '@lib/frontend/route/utils/getRoutes/getRoutes';
import { withTest } from '@lib/shared/test/utils/withTest/withTest';

const { displayName } = withTest({ getRoutes });

describe(displayName, () => {
  test('works', async () => {
    const result = await getRoutes({});
    expect(result).toStrictEqual({});
  });
});
