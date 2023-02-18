import { _useRouter } from '@lib/frontend/route/hooks/useRouter/_useRouter';
import type { UseRouterModel } from '@lib/frontend/route/hooks/useRouter/useRouter.models';
import type { LocationModel } from '@lib/frontend/route/route.models';
import { trimPathname } from '@lib/frontend/route/utils/trimPathname/trimPathname';
import { useActions } from '@lib/frontend/state/hooks/useActions/useActions';

export const useRouter = <TParams = undefined,>(): UseRouterModel<TParams> => {
  const { back, isActive, location, push, replace } = _useRouter<TParams>();
  const actions = useActions();

  const _push = <TNextParams = undefined,>({
    params,
    pathname,
  }: LocationModel<TNextParams>): void => {
    actions?.route.previousSet({ pathname: location.pathname });
    push({ params, pathname: trimPathname(pathname) });
  };

  return {
    back,

    isActive: ({ from, pathname, ...params }) =>
      isActive({
        from: from ? trimPathname(from) : undefined,
        pathname: trimPathname(pathname),
        ...params,
      }),

    location,

    push: <TNextParams = undefined,>(params: LocationModel<TNextParams>) => _push(params),

    replace: <TNextParams = undefined,>({ params, pathname }: LocationModel<TNextParams>) =>
      replace({ params, pathname: trimPathname(pathname) }),
  };
};
