import { type RouteModel } from '@lib/frontend/route/route.models';

export type GetRoutesParamsModel = {
  appRoutes?: Array<RouteModel>;
};

export type GetRoutesModel = Array<RouteModel>;
