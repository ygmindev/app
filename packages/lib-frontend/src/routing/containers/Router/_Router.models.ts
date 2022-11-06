import type { RouteModel } from '@lib/frontend/routing/containers/Router/Router.models';
import type { ReactElement } from 'react';

export interface _RouterPropsModel {
  routes: Array<_RouteModel>;
}

export interface _RouteModel {
  element?: ReactElement;
  isIndex?: boolean;
  pathname?: string;
  routes?: Array<RouteModel>;
}
