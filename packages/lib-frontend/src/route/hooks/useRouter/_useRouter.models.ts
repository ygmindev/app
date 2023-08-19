import { type LocationModel, type RouteUpdateModel } from '#lib-frontend/route/route.models';

export type _UseRouterModel<TType = undefined> = {
  back(): Promise<void>;

  isActive(params: { from?: string; isExact?: boolean; pathname?: string }): boolean;

  location: LocationModel<TType>;

  push<TNextType>(params: RouteUpdateModel<TNextType>): Promise<void>;

  replace<TNextType>(params: RouteUpdateModel<TNextType>): Promise<void>;
};
