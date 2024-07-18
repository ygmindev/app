import {
  type _MatchRoutesModel,
  type _MatchRoutesParamsModel,
} from '@lib/shared/route/utils/matchRoutes/_matchRoutes.models';
import { matchRoutes } from 'react-router-dom';

export const _matchRoutes = (...[route, routes]: _MatchRoutesParamsModel): _MatchRoutesModel =>
  matchRoutes(routes, '');

// caseSensitive?: boolean;
// path?: string;
// id?: string;
// loader?: LoaderFunction | boolean;
// action?: ActionFunction | boolean;
// hasErrorBoundary?: boolean;
// shouldRevalidate?: ShouldRevalidateFunction;
// handle?: any;
// lazy?: LazyRouteFunction<AgnosticBaseRouteObject>;
