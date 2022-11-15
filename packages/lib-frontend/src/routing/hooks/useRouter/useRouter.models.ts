import type { _UseRouterModel } from '@lib/frontend/routing/hooks/useRouter/_useRouter.models';
import type { CallableModel } from '@lib/shared/core/core.models';

export interface PathMatchParamsModel {
  from: string;
  isExact?: boolean;
  to?: string;
}

export interface UseRouterModel<TParams = undefined> extends _UseRouterModel<TParams> {
  up?: CallableModel;
}
