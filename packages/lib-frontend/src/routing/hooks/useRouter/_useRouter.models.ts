import type { LocationModel } from '@lib/frontend/routing/routing.models';

export interface _UseRouterModel<TParams = undefined> {
  isActive(pathname: string): boolean;
  location: LocationModel<TParams>;
  push<TNextParams = undefined>(location: LocationModel<TNextParams>): void;
  replace<TNextParams = undefined>(location: LocationModel<TNextParams>): void;
}
