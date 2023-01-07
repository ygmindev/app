import type { LocationModel } from '@lib/frontend/route/route.models';
import type { CallableModel } from '@lib/shared/core/core.models';

export interface _UseRouterModel<TParams = undefined> {
  back: CallableModel;
  isActive(params: { from?: string; isExact?: boolean; pathname: string }): boolean;
  location: LocationModel<TParams>;
  push<TNextParams = undefined>(location: LocationModel<TNextParams>): void;
  replace<TNextParams = undefined>(location: LocationModel<TNextParams>): void;
}
