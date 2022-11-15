import type { WithIconPropsModel } from '@lib/frontend/core/decorators/withIconProps/withIconProps.models';
import type { TranslationTextModel } from '@lib/frontend/locale/locale.models';
import type { ROUTE_TRANSITION } from '@lib/frontend/routing/routing.constants';

export interface LocationModel<TParams = undefined> {
  params?: TParams;
  pathname: string;
}

export type RouteTransitionModel = `${ROUTE_TRANSITION}`;

export interface RouteModel extends WithIconPropsModel {
  isHeader?: boolean;
  isIndex?: boolean;
  isProtected?: boolean;
  pathname?: string;
  title?: TranslationTextModel;
  transition?: RouteTransitionModel;
}
