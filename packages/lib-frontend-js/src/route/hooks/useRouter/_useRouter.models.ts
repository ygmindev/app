import { type LocationModel, type LocationUpdateModel } from '@lib/frontend/route/route.models';

export type _UseRouterModel<TType extends unknown> = {
  depth?: number;

  isMounted?: boolean;

  location: LocationModel<TType>;

  back(): void;

  isActive(params: { from?: string; isExact?: boolean; pathname?: string }): boolean;

  push<TTypeNext>(params: LocationUpdateModel<TTypeNext>): void;

  replace<TTypeNext>(params: LocationUpdateModel<TTypeNext>): void;
};
