import { type RequestContextModel } from '@lib/config/api/api.models';
import { type AsyncTextModel } from '@lib/frontend/core/components/AsyncText/AsyncText.models';
import { type WithIconPropsModel } from '@lib/frontend/core/components/Icon/Icon.models';
import { type ChildrenPropsModel, type OptionModel } from '@lib/frontend/core/core.models';
import { type ROUTE_NAVIGATION, type ROUTE_TRANSITION } from '@lib/frontend/route/route.constants';
import { type LayoutStylePropsModel } from '@lib/frontend/style/hooks/useLayoutStyles/useLayoutStyles.models';
import { type StringKeyModel } from '@lib/shared/core/core.models';
import { type WithIdModel } from '@lib/shared/core/utils/withId/withId.models';
import { type ReactElement } from 'react';

export type RouteIdParamsModel = WithIdModel;

export type RouteModel<
  TParams = Record<string, unknown>,
  TType extends Record<string, unknown> = Record<string, unknown>,
> = WithIconPropsModel &
  Pick<OptionModel, 'category'> & {
    depth?: number;
    description?: AsyncTextModel;
    element?: ReactElement<ChildrenPropsModel>;
    fullpath?: string;
    header?: boolean;
    isModal?: boolean;
    isNavigatable?: boolean;
    isProtectable?: boolean;
    layoutProps?: LayoutStylePropsModel;
    namespaces?: Array<string>;
    navigation?: ROUTE_NAVIGATION;
    params?: TParams;
    parent?: string;
    pathname: string;
    prerender?: boolean | Array<string>;
    previous?: string;
    routes?: Array<RouteModel>;
    title?: AsyncTextModel;
    transition?: ROUTE_TRANSITION;
    loaders?(params: { pathname?: string }): {
      [TKey in StringKeyModel<TType>]?: (params?: RequestContextModel) => Promise<TType[TKey]>;
    };
  };

export type LocationModel<TType = Record<string, unknown>> = {
  params?: TType & LocationParamsModel;
  pathname: string;
};

export type LocationParamsModel = {
  previous?: LocationModel<unknown>;
  redirect?: LocationModel<unknown>;
};

export type RouteContextModel<TType = Record<string, unknown>> = {
  basename?: string;
  location?: LocationModel<TType>;
  redirectTo?: string;
};

export type LocationUpdateModel<TTypeNext = Record<string, unknown>> = LocationModel<TTypeNext> & {
  root?: string | boolean | number;
};
