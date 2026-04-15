import {
  defaultHashRouteWhenBaseOnly,
  matchesHashModalRoute,
  matchesHashRouteFragment,
  pickBestHashRouteMatch,
} from '@lib/frontend/route/utils/matchesHashRoute/matchesHashRoute';

describe('matchesHashModalRoute', () => {
  test('matches base and sub-paths for #pathname', () => {
    expect(matchesHashModalRoute('settings', '#settings')).toBe(true);
    expect(matchesHashModalRoute('settings/profile', '#settings')).toBe(true);
    expect(matchesHashModalRoute('settings/profile/extra', '#settings')).toBe(true);
    expect(matchesHashModalRoute('settings', 'settings')).toBe(true);
  });

  test('rejects missing hash or wrong prefix', () => {
    expect(matchesHashModalRoute(undefined, '#settings')).toBe(false);
    expect(matchesHashModalRoute('', '#settings')).toBe(false);
    expect(matchesHashModalRoute('other', '#settings')).toBe(false);
    expect(matchesHashModalRoute('settingsx', '#settings')).toBe(false);
  });
});

describe('matchesHashRouteFragment', () => {
  test('compares hash to fragment after # in route path', () => {
    expect(matchesHashRouteFragment('settings/profile', 'app/home#settings/profile')).toBe(true);
    expect(matchesHashRouteFragment('settings/profile', 'app/home#settings/profile/extra')).toBe(
      false,
    );
  });

  test('prefix: hash extends fragment', () => {
    expect(matchesHashRouteFragment('settings/billing/inv', 'x#settings/billing')).toBe(true);
    expect(matchesHashRouteFragment('settings/profile', 'app/home#settings')).toBe(true);
  });

  test('rejects missing hash or path without fragment', () => {
    expect(matchesHashRouteFragment(undefined, 'app/home#settings')).toBe(false);
    expect(matchesHashRouteFragment('settings', 'app')).toBe(false);
  });
});

describe('pickBestHashRouteMatch', () => {
  test('prefers longest matching fragment', () => {
    const routes = [
      { fullpath: 'a#settings' },
      { fullpath: 'a#settings/profile' },
    ];
    expect(pickBestHashRouteMatch('settings/profile', routes)).toEqual(routes[1]);
  });

  test('returns undefined when nothing matches', () => {
    expect(pickBestHashRouteMatch('settings/profile', [{ fullpath: 'a#settings/appearance' }])).toBe(
      undefined,
    );
  });
});

describe('defaultHashRouteWhenBaseOnly', () => {
  test('returns first route when hash is exactly the modal base', () => {
    const routes = [{ fullpath: 'a#settings/profile' }, { fullpath: 'a#settings/appearance' }];
    expect(defaultHashRouteWhenBaseOnly('settings', '#settings', routes)).toEqual(routes[0]);
  });

  test('returns undefined when hash has a sub-path', () => {
    const routes = [{ fullpath: 'a#settings/profile' }];
    expect(defaultHashRouteWhenBaseOnly('settings/profile', '#settings', routes)).toBe(undefined);
  });
});
