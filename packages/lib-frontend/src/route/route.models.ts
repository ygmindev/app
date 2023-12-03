import { type ReactElement } from 'react';

import { type WithIconPropsModel } from '#lib-frontend/core/components/Icon/Icon.models';
import { type ChildrenPropsModel } from '#lib-frontend/core/core.models';
import { type TranslatableTextModel } from '#lib-frontend/locale/locale.models';
import { type ROUTE_DIRECTION, type ROUTE_TRANSITION } from '#lib-frontend/route/route.constants';
import { type RouteStateModel } from '#lib-frontend/route/stores/routeStore/routeStore.models';
import { type LayoutStylePropsModel } from '#lib-frontend/style/hooks/useLayoutStyles/useLayoutStyles.models';
import { type WithIdModel } from '#lib-shared/core/utils/withId/withId.models';

export type RouteIdParamsModel = WithIdModel;

export type RouteModel<TProps extends ChildrenPropsModel = ChildrenPropsModel> =
  WithIconPropsModel & {
    element?: ReactElement<TProps>;
    fullpath?: string;
    header?: { previous?: string };
    isFullScreen?: boolean;
    isIndex?: boolean;
    isNavigatable?: boolean;
    isProtectable?: boolean;
    layoutProps?: LayoutStylePropsModel;
    navigator?: ReactElement<NavigatorPropsModel>;
    parent?: string;
    pathname: string;
    prerender?: false | Array<string>;
    routes?: Array<RouteModel>;
    title?: TranslatableTextModel;
    transition?: RouteTransitionModel;
  };

export type UriModel<TType = object> = {
  host?: string;
  params?: TType;
  pathname?: string;
  port?: number | string;
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

export type RouteDirectionModel = `${ROUTE_DIRECTION}`;

export type NavigatorPropsModel = {
  routes?: Array<RouteModel>;
};
