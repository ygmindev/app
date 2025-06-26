import {
  type _MatchRoutesModel,
  type _MatchRoutesParamsModel,
} from '@lib/shared/route/utils/matchRoutes/_matchRoutes.models';
import { matchPath } from 'react-router';

export const _matchRoutes = ({
  isDeep = true,
  pathname,
  routes,
}: _MatchRoutesParamsModel): _MatchRoutesModel =>
  routes.reduce((result, route) => {
    const isMatch = matchPath(
      { end: false, path: (route.fullpath ?? route.pathname).replaceAll('*', '') },
      pathname,
    );
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
