import type { _UseRouterModel } from '@lib/frontend/routing/hooks/useRouter/_useRouter.models';

export interface UseRouterModel<TParams = undefined> extends _UseRouterModel<TParams> {
  back?(): void;

  up?(): void;
}
