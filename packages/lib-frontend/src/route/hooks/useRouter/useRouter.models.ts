import { type _UseRouterModel } from '#lib-frontend/route/hooks/useRouter/_useRouter.models';
import { type LocationParamsModel } from '#lib-frontend/route/route.models';

export type PathMatchParamsModel = {
  from: string;
  isExact?: boolean;
  to?: string;
};

export type UseRouterModel<TType extends LocationParamsModel = LocationParamsModel> =
  _UseRouterModel<TType>;
