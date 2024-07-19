import { type RouteModel } from '@lib/frontend/route/route.models';

export type _MatchRouteParamsModel = {
  isDeep?: boolean;
  route: string;
  routes: Array<RouteModel>;
};

export type _MatchRouteModel = Array<RouteModel>;
