import type { PathUpdateParamsModel } from '@lib/frontend/route/hooks/useRouter/useRouter.models';
import type { LocationModel } from '@lib/frontend/route/route.models';
import type { CallablePromiseModel } from '@lib/shared/core/core.models';

export interface _UseRouterModel<TParams = void> {
  back: CallablePromiseModel;

  isActive(params: { from?: string; isExact?: boolean; pathname: string }): boolean;

  location: LocationModel<TParams>;

  push<TNextParams = void>(params: PathUpdateParamsModel<TNextParams>): Promise<void>;

  replace<TNextParams = void>(params: PathUpdateParamsModel<TNextParams>): Promise<void>;
}
