import { getRouteGroup } from '#lib-frontend/route/utils/getRouteGroup/getRouteGroup';
import { withTest } from '#lib-shared/test/utils/withTest/withTest';

const { displayName } = withTest({ getRouteGroup });

describe(displayName, () => {
  test('works', async () => {
    const result = await getRouteGroup({});
    expect(result).toStrictEqual({});
  });
});
