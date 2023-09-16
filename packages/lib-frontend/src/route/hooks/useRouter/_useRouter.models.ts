import { type LocationModel, type RouteUpdateModel } from '#lib-frontend/route/route.models';

export type _UseRouterModel<TType = object> = {
  back(): void;

  isActive(params: { from?: string; isExact?: boolean; pathname?: string }): boolean;

  location: LocationModel<TType>;

  push<TTypeNext>(params: RouteUpdateModel<TTypeNext>): void;

  replace<TTypeNext>(params: RouteUpdateModel<TTypeNext>): void;
};
