import { type LocationModel } from '@lib/frontend/route/route.models';

export type _UseRouterModel<TType extends unknown> = {
  depth?: number;

  isMounted?: boolean;

  location: LocationModel<TType>;

  back(): void;

  isActive(params: IsActiveParamsModel): boolean;

  push<TTypeNext>(params: LocationModel<TTypeNext>): void;

  replace<TTypeNext>(params: LocationModel<TTypeNext>): void;
};

export type IsActiveParamsModel = {
  from?: string;
  isExact?: boolean;
  isHashable?: boolean;
  pathname?: string;
};
