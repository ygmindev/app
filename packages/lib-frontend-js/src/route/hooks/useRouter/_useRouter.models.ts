import { type LocationModel, type LocationUpdateModel } from '@lib/frontend/route/route.models';

export type _UseRouterModel<TType = object> = {
  location: LocationModel<TType>;

  back(): void;

  getPath<TTypeNext>(pathname: string, params?: TTypeNext): string;

  isActive(params: { from?: string; isExact?: boolean; pathname?: string }): boolean;

  push<TTypeNext>(params: LocationUpdateModel<TTypeNext>): void;

  replace<TTypeNext>(params: LocationUpdateModel<TTypeNext>): void;
};
