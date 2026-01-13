import { useRouter as useRouterBase } from '@lib/frontend/route/hooks/useRouter/useRouter.base';
import { type UseRouterModel } from '@lib/frontend/route/hooks/useRouter/useRouter.models';
import { LocationModel } from '@lib/frontend/route/route.models';

export const useRouter = <TType extends unknown>(): UseRouterModel<TType> => {
  const router = useRouterBase<TType>();
  return {
    ...router,

    push: <TTypeNext = undefined,>({ params, pathname }: LocationModel<TTypeNext>) => {
      router.push({params, pathname});
      pathname.startsWith('#') && window.history.pushState(null, '', pathname);
    },

    replace: <TTypeNext = undefined,>({ params, pathname }: LocationModel<TTypeNext>) => {
      pathname.startsWith('#') && window.history.pushState(null, '', pathname);
    },
  };
};
