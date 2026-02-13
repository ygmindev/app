import { type RouteModel } from '@lib/frontend/route/route.models';
import { type ReactElement } from 'react';

export type GetRoutesParamsModel = {
  appRoutes?: Array<RouteModel>;
  footerElement?: ReactElement;
  headerElement?: ReactElement;
  routes?: Array<RouteModel>;
};

export type GetRoutesModel = Array<RouteModel>;
