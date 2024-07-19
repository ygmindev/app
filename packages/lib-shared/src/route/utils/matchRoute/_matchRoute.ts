import {
  type _MatchRouteModel,
  type _MatchRouteParamsModel,
} from '@lib/shared/route/utils/matchRoute/_matchRoute.models';
import { matchPath } from 'react-router';

export const _matchRoute = ({
  isDeep = true,
  route,
  routes,
}: _MatchRouteParamsModel): _MatchRouteModel =>
  routes.reduce((result, v) => {
    const isMatch = matchPath(
      { end: false, path: (v.fullpath ?? v.pathname).replaceAll('*', '') },
      route,
    );
    const resultF = !isMatch
      ? result
      : [
          ...result,
          v,
          ...(isMatch && isDeep && v.routes
            ? _matchRoute({ isDeep, route, routes: v.routes })
            : []),
        ];
    return resultF;
  }, [] as _MatchRouteModel);
