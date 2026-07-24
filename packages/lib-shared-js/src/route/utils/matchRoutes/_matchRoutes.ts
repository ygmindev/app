import {
  type _MatchRoutesModel,
  type _MatchRoutesParamsModel,
} from '@lib/shared/route/utils/matchRoutes/_matchRoutes.models';
import { type MatchedRouteModel } from '@lib/shared/route/utils/matchRoutes/matchRoutes.models';

const getRouteParams = (
  pattern: string,
  pathname: string,
  isExact: boolean = false,
): Record<string, unknown> | null => {
  const normalizedPattern = pattern.replace(/\/$/, '') || '/';
  const normalizedPathname = pathname.replace(/\/$/, '') || '/';
  if (normalizedPattern === '/' && !isExact) {
    return {};
  }
  const paramNames: Array<string> = [];
  const regexPattern = normalizedPattern
    .replace(/:([^/]+)/g, (_, name) => {
      paramNames.push(name);
      return '([^/]+)';
    })
    .replace(/\*/g, '.*');
  const regexString = isExact ? `^${regexPattern}$` : `^${regexPattern}(/|$)`;
  const regex = new RegExp(regexString);
  const match = normalizedPathname.match(regex);
  if (!match) return null;
  const params: Record<string, unknown> = {};
  paramNames.forEach((name, index) => {
    params[name] = match[index + 1];
  });

  return params;
};

export const _matchRoutes = ({
  isDeep = true,
  parent = '',
  pathname,
  routes,
}: _MatchRoutesParamsModel): _MatchRoutesModel =>
  routes.reduce((result, route) => {
    const absolutePath = `${parent}/${route.pathname}`.replace(/\/+/g, '/');
    const routePath = (route.fullpath ?? absolutePath).replace(/\*/g, '');
    const params = getRouteParams(routePath, pathname);
    if (!params) return result;
    const current: MatchedRouteModel = { params, route };
    const children =
      isDeep && route.routes
        ? _matchRoutes({
            isDeep,
            parent: absolutePath,
            pathname,
            routes: route.routes,
          })
        : [];

    return [...result, current, ...children];
  }, [] as _MatchRoutesModel);
