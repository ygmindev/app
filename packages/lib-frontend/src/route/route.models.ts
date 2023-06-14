import type { ReactElement } from 'react';

import type { TranslatableTextPropsModel } from '#lib-frontend/locale/components/TranslatableText/TranslatableText.models';
import type { TranslatableTextModel } from '#lib-frontend/locale/locale.models';
import type { ROUTE_TRANSITION } from '#lib-frontend/route/route.constants';
import type { WithIdModel } from '#lib-shared/core/decorators/withId/withId.models';

export interface RouteIdParamsModel extends WithIdModel {}

export interface RouteModel extends Pick<TranslatableTextPropsModel, 'ns'> {
  element?: ReactElement;
  header?: { previous?: string };
  isProtectable?: boolean;
  pathname: string;
  root?: string;
  routes?: Array<RouteModel>;
  title?: TranslatableTextModel;
  transition?: RouteTransitionModel;
}

export interface LocationModel<TParams extends LocationParamsModel = LocationParamsModel> {
  params?: TParams;
  pathname: string;
}

export interface LocationParamsModel {
  title?: string;
}

export interface RouteContextModel<TParams extends LocationParamsModel = LocationParamsModel> {
  location?: LocationModel<TParams>;
  redirect?: string;
  status?: number;
}

export type RouteTransitionModel = `${ROUTE_TRANSITION}`;
