import { type LocationModel, type RouteUpdateModel } from '#lib-frontend/route/route.models';

export type _UseRouterModel<TType = object> = {
  back(): Promise<void>;

  isActive(params: { from?: string; isExact?: boolean; pathname?: string }): boolean;

  location: LocationModel<TType>;

  push<TTypeNext>(params: RouteUpdateModel<TTypeNext>): Promise<void>;

  replace<TTypeNext>(params: RouteUpdateModel<TTypeNext>): Promise<void>;
};
