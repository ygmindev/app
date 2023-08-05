import {
  type LocationModel,
  type LocationParamsModel,
  type RouteUpdateModel,
} from '#lib-frontend/route/route.models';

export type _UseRouterModel<TType extends LocationParamsModel = LocationParamsModel> = {
  back(): Promise<void>;

  isActive(params: { from?: string; isExact?: boolean; pathname?: string }): boolean;

  location: LocationModel<TType>;

  push<TNextType extends LocationParamsModel = LocationParamsModel>(
    params: RouteUpdateModel<TNextType>,
  ): Promise<void>;

  replace<TNextType extends LocationParamsModel = LocationParamsModel>(
    params: RouteUpdateModel<TNextType>,
  ): Promise<void>;
};
