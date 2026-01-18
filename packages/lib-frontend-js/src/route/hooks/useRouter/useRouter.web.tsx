import { useRouter as useRouterBase } from '@lib/frontend/route/hooks/useRouter/useRouter.base';
import { type UseRouterModel } from '@lib/frontend/route/hooks/useRouter/useRouter.models';
import { useUrl } from '@lib/frontend/route/hooks/useUrl/useUrl';
import { type LocationModel } from '@lib/frontend/route/route.models';

export const useRouter = <TType extends unknown>(): UseRouterModel<TType> => {
  const router = useRouterBase<TType>();
  const { push, replace } = useUrl();
  return {
    ...router,

    push: <TTypeNext = undefined,>({ params, pathname }: LocationModel<TTypeNext>) => {
      router.push({ params, pathname });
      push(pathname);
    },

    replace: <TTypeNext = undefined,>({ params, pathname }: LocationModel<TTypeNext>) => {
      router.replace({ params, pathname });
      replace(pathname);
    },
  };
};
