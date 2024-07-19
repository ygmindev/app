import { type RouteModel } from '@lib/frontend/route/route.models';
import { matchRoute } from '@lib/shared/route/utils/matchRoute/matchRoute';
import { withTest } from '@lib/shared/test/utils/withTest/withTest';

const { displayName } = withTest({ matchRoute });

describe(displayName, () => {
  const ROUTES: Array<RouteModel> = [{ pathname: 'a' }];
  test('works', async () => {
    const result = matchRoute({
      route: 'a',
      routes: ROUTES,
    });
    expect(result).toStrictEqual({});
  });
});
