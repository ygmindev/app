import type { _UseRouterModel } from '@lib/frontend/route/hooks/useRouter/_useRouter.models';

export interface PathMatchParamsModel {
  from: string;
  isExact?: boolean;
  to?: string;
}

export interface UseRouterModel<TParams = undefined> extends _UseRouterModel<TParams> {}
