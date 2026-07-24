import { type RouteModel } from '@lib/frontend/route/route.models';
import { type MatchedRouteModel } from '@lib/shared/route/utils/matchRoutes/matchRoutes.models';

export type _MatchRoutesParamsModel = {
  isDeep?: boolean;
  parent?: string;
  pathname: string;
  routes: Array<RouteModel>;
};

export type _MatchRoutesModel = Array<MatchedRouteModel>;
