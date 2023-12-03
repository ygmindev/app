import { getRouteList } from '#lib-frontend/route/utils/getRouteList/getRouteList';
import { withTest } from '#lib-shared/test/utils/withTest/withTest';

const { displayName } = withTest({ getRouteList });

describe(displayName, () => {
  test('works', async () => {
    const result = await getRouteList({});
    expect(result).toStrictEqual({});
  });
});
