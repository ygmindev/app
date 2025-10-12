import {
  type _MatchRoutesModel,
  type _MatchRoutesParamsModel,
} from '@lib/shared/route/utils/matchRoutes/_matchRoutes.models';

const matchPath = (pattern: string, pathname: string, isExact: boolean = false): boolean => {
  const normalizedPattern = pattern.replace(/\/$/, '') || '/';
  const normalizedPathname = pathname.replace(/\/$/, '') || '/';
  if (isExact) {
    return normalizedPattern === normalizedPathname;
  }
  const regexPattern = normalizedPattern.replace(/:[^/]+/g, '([^/]+)').replace(/\*/g, '.*');
  return new RegExp(`^${regexPattern}(/|$)`).test(normalizedPathname);
};

export const _matchRoutes = ({
  isDeep = true,
  pathname,
  routes,
}: _MatchRoutesParamsModel): _MatchRoutesModel =>
  routes.reduce((result, route) => {
    const routePath = (route.fullpath ?? route.pathname).replace(/\*/g, '');
    const isMatch = matchPath(routePath, pathname, false);
    const resultF = !isMatch
      ? result
      : [
          ...result,
          route,
          ...(isMatch && isDeep && route.routes
            ? _matchRoutes({ isDeep, pathname, routes: route.routes })
            : []),
        ];

    return resultF;
  }, [] as _MatchRoutesModel);
