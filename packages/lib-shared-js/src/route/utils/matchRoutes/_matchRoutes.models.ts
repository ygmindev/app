import { type RouteModel } from '@lib/frontend/route/route.models';

export type _MatchRoutesParamsModel = {
  isDeep?: boolean;
  pathname: string;
  routes: Array<RouteModel>;
};

export type _MatchRoutesModel = Array<RouteModel>;
