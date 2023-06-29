import { type _UseRouterModel } from '#lib-frontend/route/hooks/useRouter/_useRouter.models';
import { type LocationModel, type LocationParamsModel } from '#lib-frontend/route/route.models';
import { type RouteStateModel } from '#lib-frontend/route/stores/routeStore/routeStore.models';

export type PathMatchParamsModel = {
  from: string;
  isExact?: boolean;
  to?: string;
};

export type PathUpdateParamsModel<TNextParams extends LocationParamsModel = LocationParamsModel> =
  LocationModel<TNextParams> & Pick<RouteStateModel, 'isBack'>;

export type UseRouterModel<TParams extends LocationParamsModel = LocationParamsModel> =
  _UseRouterModel<TParams>;
