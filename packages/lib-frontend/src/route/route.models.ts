import type { IconPropsModel } from '@lib/frontend/core/components/Icon/Icon.models';
import type { TranslatableTextModel } from '@lib/frontend/locale/locale.models';
import type { ROUTE_TRANSITION } from '@lib/frontend/route/route.constants';

export interface LocationModel<TParams = undefined> {
  params?: TParams;
  pathname: string;
}

export type RouteTransitionModel = `${ROUTE_TRANSITION}`;

export interface RouteModel extends Pick<IconPropsModel, 'icon'> {
  isHeader?: boolean;
  isIndex?: boolean;
  isProtected?: boolean;
  pathname?: string;
  title?: TranslatableTextModel;
  transition?: RouteTransitionModel;
}
