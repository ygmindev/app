import { type RouteModel } from '@lib/frontend/route/route.models';
import { type ReactNode } from 'react';

export type GetRoutesParamsModel = {
  appRoutes?: Array<RouteModel>;
  footerElement?: ReactNode;
  headerElement?: ReactNode;
  routes?: Array<RouteModel>;
};

export type GetRoutesModel = Array<RouteModel>;
