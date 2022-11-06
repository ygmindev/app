import type { PathMatchParamsModel } from '@lib/frontend/routing/hooks/useRouter/useRouter.models';
import type { LocationModel } from '@lib/frontend/routing/routing.models';

export interface _UseRouterModel<TParams = undefined> {
  isActive(params: PathMatchParamsModel): boolean;
  location: LocationModel<TParams>;
  push<TNextParams = undefined>(location: LocationModel<TNextParams>): void;
  replace<TNextParams = undefined>(location: LocationModel<TNextParams>): void;
}
