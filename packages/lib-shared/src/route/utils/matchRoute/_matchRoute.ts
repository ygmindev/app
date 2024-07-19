import {
  type _MatchRouteModel,
  type _MatchRouteParamsModel,
} from '@lib/shared/route/utils/matchRoute/_matchRoute.models';

export const _matchRoute = (...[route, routes]: _MatchRouteParamsModel): _MatchRouteModel =>
  matchRoute(routes, '');

// caseSensitive?: boolean;
// path?: string;
// id?: string;
// loader?: LoaderFunction | boolean;
// action?: ActionFunction | boolean;
// hasErrorBoundary?: boolean;
// shouldRevalidate?: ShouldRevalidateFunction;
// handle?: any;
// lazy?: LazyRouteFunction<AgnosticBaseRouteObject>;
