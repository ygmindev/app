import { type ReactElement } from 'react';

import { type ChildrenPropsModel } from '#lib-frontend/core/core.models';
import { type TranslatableTextPropsModel } from '#lib-frontend/locale/components/TranslatableText/TranslatableText.models';
import { type TranslatableTextModel } from '#lib-frontend/locale/locale.models';
import { type ROUTE_TRANSITION } from '#lib-frontend/route/route.constants';
import { type WithIdModel } from '#lib-shared/core/utils/withId/withId.models';

export type RouteIdParamsModel = WithIdModel;

export type RouteModel<TProps extends ChildrenPropsModel = ChildrenPropsModel> = {
  element?: ReactElement<TProps>;
  fullpath?: string;
  header?: { previous?: string };
  isClientOnly?: boolean;
  isProtectable?: boolean;
  pathname: string;
  root?: string;
  routes?: Array<RouteModel>;
  title?: TranslatableTextModel;
  transition?: RouteTransitionModel;
} & Pick<TranslatableTextPropsModel, 'ns'>;

export type LocationModel<TParams extends LocationParamsModel = LocationParamsModel> = {
  params?: TParams;
  pathname: string;
};

export type LocationParamsModel = {
  title?: string;
};

export type RouteContextModel<TParams extends LocationParamsModel = LocationParamsModel> = {
  basename?: string;
  location?: LocationModel<TParams>;
  redirect?: string;
  status?: number;
};

export type RouteTransitionModel = `${ROUTE_TRANSITION}`;
