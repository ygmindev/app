import { type LocationModel, type LocationUpdateModel } from '@lib/frontend/route/route.models';

export type _UseRouterModel<TType = object> = {
  back(): void;

  getPath<TTypeNext>(pathname: string, params?: TTypeNext): string;

  isActive(params: { from?: string; isExact?: boolean; pathname?: string }): boolean;

  location: LocationModel<TType>;

  push<TTypeNext>(params: LocationUpdateModel<TTypeNext>): void;

  replace<TTypeNext>(params: LocationUpdateModel<TTypeNext>): void;
};
