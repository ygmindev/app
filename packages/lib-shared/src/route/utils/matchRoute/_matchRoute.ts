import {
  type _MatchRouteModel,
  type _MatchRouteParamsModel,
} from '@lib/shared/route/utils/matchRoute/_matchRoute.models';
import { matchPath } from 'react-router';

export const _matchRoute = ({
  isDeep = false,
  route,
  routes,
}: _MatchRouteParamsModel): _MatchRouteModel =>
  routes.reduce((result, v) => {
    const isMatch = matchPath({ path: (v.fullpath ?? v.pathname).replaceAll('*', '') }, route);
    const resultF = isMatch
      ? [
          ...result,
          v,
          ...(isDeep && v.routes ? _matchRoute({ isDeep, route, routes: v.routes }) : []),
        ]
      : result;
    return resultF;
  }, [] as _MatchRouteModel);
