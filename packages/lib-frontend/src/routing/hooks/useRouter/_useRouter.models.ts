import type { LocationModel } from '@lib/frontend/routing/routing.models';

export interface _UseRouterModel<TParams> {
  back(): void;
  isActive(pathname: string): boolean;
  location: LocationModel<TParams>;
  push<TParams>(pathname: string, params?: TParams): void;
  replace<TParams>(pathname: string, params?: TParams): void;
}
