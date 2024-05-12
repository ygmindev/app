import { type WithIconPropsModel } from '@lib/frontend/core/components/Icon/Icon.models';
import { type AsyncTextModel, type ChildrenPropsModel } from '@lib/frontend/core/core.models';
import { type ROUTE_NAVIGATION, type ROUTE_TRANSITION } from '@lib/frontend/route/route.constants';
import { type RouteStateModel } from '@lib/frontend/route/stores/routeStore/routeStore.models';
import { type LayoutStylePropsModel } from '@lib/frontend/style/hooks/useLayoutStyles/useLayoutStyles.models';
import { type WithIdModel } from '@lib/shared/core/utils/withId/withId.models';
import { type ReactElement } from 'react';

export type RouteIdParamsModel = WithIdModel;

export type RouteModel<
  TProps extends ChildrenPropsModel = ChildrenPropsModel,
  TParams = undefined,
> = WithIconPropsModel & {
  description?: AsyncTextModel;
  element?: ReactElement<TProps>;
  fullpath?: string;
  header?: { previous?: true | number };
  isIndex?: boolean;
  isNavigatable?: boolean;
  isProtectable?: boolean;
  layoutProps?: LayoutStylePropsModel;
  namespaces?: Array<string>;
  navigation?: RouteNavigationModel;
  params?: TParams;
  parent?: string;
  pathname: string;
  prerender?: false | Array<string>;
  routes?: Array<RouteModel>;
  title?: AsyncTextModel;
  transition?: RouteTransitionModel;
};

export type LocationModel<TType = object> = {
  context?: LocationContextModel;
  params?: TType;
  pathname: string;
};

export type LocationContextModel = {
  previous?: string;
  redirectTo?: string;
};

export type RouteContextModel<TType = object> = {
  basename?: string;
  location?: LocationModel<TType>;
  redirectTo?: string;
};

export type RouteUpdateModel<TTypeNext = object> = LocationModel<TTypeNext> &
  Pick<RouteStateModel, 'isBack'> & {
    root?: string | boolean | number;
  };

export type RouteTransitionModel = `${ROUTE_TRANSITION}`;

export type RouteNavigationModel = `${ROUTE_NAVIGATION}`;
