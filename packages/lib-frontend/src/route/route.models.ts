import type { TranslatableTextModel } from '@lib/frontend/locale/locale.models';
import type { ROUTE_TRANSITION } from '@lib/frontend/route/route.constants';
import type { ReactElement } from 'react';

export interface LocationModel<TParams = undefined> {
  params?: TParams;
  pathname: string;
}

export type RouteTransitionModel = `${ROUTE_TRANSITION}`;

export interface RouteModel {
  element?: ReactElement;
  isHeader?: boolean;
  isIndex?: boolean;
  isProtected?: boolean;
  pathname?: string;
  routes?: Array<RouteModel>;
  title?: TranslatableTextModel;
  transition?: RouteTransitionModel;
}
