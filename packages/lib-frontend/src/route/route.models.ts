import { type ReactElement } from 'react';

import { type IconPropsModel } from '#lib-frontend/core/components/Icon/Icon.models';
import { type ChildrenPropsModel } from '#lib-frontend/core/core.models';
import { type TranslatableTextPropsModel } from '#lib-frontend/locale/components/TranslatableText/TranslatableText.models';
import { type TranslatableTextModel } from '#lib-frontend/locale/locale.models';
import { type ROUTE_DIRECTION, type ROUTE_TRANSITION } from '#lib-frontend/route/route.constants';
import { type RouteStateModel } from '#lib-frontend/route/stores/routeStore/routeStore.models';
import { type LayoutPropsModel } from '#lib-frontend/style/hooks/useLayoutStyles/useLayoutStyles.models';
import { type WithIdModel } from '#lib-shared/core/utils/withId/withId.models';

export type RouteIdParamsModel = WithIdModel;

export type RouteModel<TProps extends ChildrenPropsModel = ChildrenPropsModel> = Pick<
  TranslatableTextPropsModel,
  'ns'
> &
  Pick<IconPropsModel, 'icon'> & {
    element?: ReactElement<TProps>;
    fullpath?: string;
    header?: { previous?: string };
    isFullScreen?: boolean;
    isIndex?: boolean;
    isNavigatable?: boolean;
    isProtectable?: boolean;
    isRoot?: string;
    layoutProps?: LayoutPropsModel;
    navigator?: ReactElement<NavigatorPropsModel>;
    parent?: string;
    pathname: string;
    prerender?: false | Array<string>;
    routes?: Array<RouteModel>;
    title?: TranslatableTextModel;
    transition?: RouteTransitionModel;
  };

export type UriModel<TParams = undefined> = {
  host?: string;
  params?: TParams;
  pathname?: string;
  port?: number | string;
};

export type LocationModel<TType = undefined> = {
  params?: TType & LocationParamsModel;
  pathname: string;
};

export type LocationParamsModel = {
  previous?: string;
};

export type RouteContextModel<TType = undefined> = {
  basename?: string;
  location?: LocationModel<TType>;
  redirectTo?: string;
};

export type RouteUpdateModel<TNextType = undefined> = LocationModel<TNextType> &
  Pick<RouteStateModel, 'isBack'>;

export type RouteTransitionModel = `${ROUTE_TRANSITION}`;

export type RouteDirectionModel = `${ROUTE_DIRECTION}`;

export type NavigatorPropsModel = {
  routes?: Array<RouteModel>;
};
