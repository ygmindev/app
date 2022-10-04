import type { LocationModel } from '@lib/frontend/routing/routing.models';

export interface _UseRouterModel<TParams = undefined> {
  back(): void;
  isActive(pathname: string): boolean;
  location: LocationModel<TParams>;
  push<TParams = undefined>(location: LocationModel<TParams>): void;
  replace<TParams = undefined>(location: LocationModel<TParams>): void;
}
