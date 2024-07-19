import { matchRoute } from '@lib/shared/route/utils/matchRoute/matchRoute';
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

  test('works with depth=1', async () => {
    const result = matchRoute({
      route: '/b1/b2',
      routes: [
        { pathname: '/a1', routes: [{ pathname: '/a2' }, { pathname: '/a3' }] },
        { pathname: '/b1', routes: [{ pathname: '/b2' }, { pathname: '/b3' }] },
        { pathname: '/c1', routes: [{ pathname: '/c2' }, { pathname: '/c3' }] },
      ],
    });
    expect(result).toStrictEqual([{ pathname: '/b1' }, { pathname: '/b2' }]);
  });
});
