import { useRouter as useRouterBase } from '@lib/frontend/route/hooks/useRouter/useRouter.base';
import { type UseRouterModel } from '@lib/frontend/route/hooks/useRouter/useRouter.models';

export const useRouter = <TType extends unknown>(): UseRouterModel<TType> => {
  const router = useRouterBase<TType>();
  return router;
};
