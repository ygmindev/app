import { matchRoutes } from '@lib/shared/route/utils/matchRoutes/matchRoutes';
import { trimRoutes } from '@lib/shared/route/utils/trimRoutes/trimRoutes';
import { withTest } from '@lib/shared/test/utils/withTest/withTest';

const { displayName } = withTest({ matchRoutes });

describe(displayName, () => {
  test('depth=0', async () => {
    const result = matchRoutes({
      pathname: '/b',
      routes: [{ pathname: '/a' }, { pathname: '/b' }, { pathname: '/c' }],
    });
    expect(result).toStrictEqual([{ pathname: '/b' }]);
  });

  test('isDeep', async () => {
    const result = matchRoutes({
      isDeep: true,
      pathname: '/b/b2',
      routes: trimRoutes([
        { pathname: '/a', routes: [{ pathname: '/a2' }, { pathname: '/a3' }] },
        { pathname: '/b', routes: [{ pathname: '/b2' }, { pathname: '/b3' }] },
        { pathname: '/c', routes: [{ pathname: '/c2' }, { pathname: '/c3' }] },
      ]),
    });
    expect(result.map(({ fullpath }) => fullpath)).toStrictEqual(['/b', '/b/b2']);
  });
});
