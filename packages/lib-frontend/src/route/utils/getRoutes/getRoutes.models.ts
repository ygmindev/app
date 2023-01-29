import type { RouteModel } from '@lib/frontend/route/route.models';

export interface GetRoutesParamsModel {
  appRoutes?: Array<RouteModel>;
}

export type GetRoutesModel = Array<RouteModel>;
