import { type PathUpdateParamsModel } from '#lib-frontend/route/hooks/useRouter/useRouter.models';
import { type LocationModel, type LocationParamsModel } from '#lib-frontend/route/route.models';

export type _UseRouterModel<TParams extends LocationParamsModel = LocationParamsModel> = {
  back(): Promise<void>;

  isActive(params: { from?: string; isExact?: boolean; pathname?: string }): boolean;

  location: LocationModel<TParams>;

  push<TNextParams extends LocationParamsModel = LocationParamsModel>(
    params: PathUpdateParamsModel<TNextParams>,
  ): Promise<void>;

  replace<TNextParams extends LocationParamsModel = LocationParamsModel>(
    params: PathUpdateParamsModel<TNextParams>,
  ): Promise<void>;
};
