import { type _UseRouterModel } from '@lib/frontend/route/hooks/useRouter/_useRouter.models';

export type PathMatchParamsModel = {
  from: string;
  isExact?: boolean;
  to?: string;
};

export type UseRouterModel<TType = object> = _UseRouterModel<TType>;
