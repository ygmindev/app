import type { _UseRouterModel } from '@lib/frontend/route/hooks/useRouter/_useRouter.models';
import type { LocationModel } from '@lib/frontend/route/route.models';
import type { RouteStateModel } from '@lib/frontend/route/stores/routeStore/routeStore.models';

export interface PathMatchParamsModel {
  from: string;
  isExact?: boolean;
  to?: string;
}

export interface PathUpdateParamsModel<TNextParams = void>
  extends LocationModel<TNextParams>,
    Pick<RouteStateModel, 'isBack'> {}

export interface UseRouterModel<TParams = void> extends _UseRouterModel<TParams> {}
