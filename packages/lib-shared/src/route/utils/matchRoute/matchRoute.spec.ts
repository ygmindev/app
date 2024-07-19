import { matchRoute } from '@lib/shared/route/utils/matchRoute/matchRoute';
import { trimRoutes } from '@lib/shared/route/utils/trimRoutes/trimRoutes';
import { withTest } from '@lib/shared/test/utils/withTest/withTest';

const { displayName } = withTest({ matchRoute });

describe(displayName, () => {
  test('works with depth=0', async () => {
    const result = matchRoute({
      route: '/b',
      routes: [{ pathname: '/a' }, { pathname: '/b' }, { pathname: '/c' }],
    });
    expect(result).toStrictEqual([{ pathname: '/b' }]);
  });

  test('works with isDeep', async () => {
    const result = matchRoute({
      isDeep: true,
      route: '/b/b2',
      routes: trimRoutes([
        { pathname: '/a', routes: [{ pathname: '/a2' }, { pathname: '/a3' }] },
        { pathname: '/b', routes: [{ pathname: '/b2' }, { pathname: '/b3' }] },
        { pathname: '/c', routes: [{ pathname: '/c2' }, { pathname: '/c3' }] },
      ]),
    });
    expect(result.map(({ fullpath }) => fullpath)).toStrictEqual(['/b', '/b/b2']);
  });
});
