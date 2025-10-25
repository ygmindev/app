import { _useRouter } from '@lib/frontend/route/hooks/useRouter/_useRouter';
import { type UseRouterModel } from '@lib/frontend/route/hooks/useRouter/useRouter.models';
import { type LocationUpdateModel } from '@lib/frontend/route/route.models';
import { trimPathname } from '@lib/frontend/route/utils/trimPathname/trimPathname';

export const useRouter = <TType,>(): UseRouterModel<TType> => {
  const { back, isActive, isMounted, location, push, replace } = _useRouter();

  return {
    back,

    isActive: ({ from, pathname, ...params }) =>
      pathname
        ? isActive({
            from: from ? trimPathname(from) : undefined,
            pathname: trimPathname(pathname),
            ...params,
          })
        : false,

    isMounted,

    location,

    push: <TTypeNext = undefined,>({ params, pathname, root }: LocationUpdateModel<TTypeNext>) => {
      push({
        params: { ...params, previous: location },
        pathname: trimPathname(pathname),
      });
    },

    replace: <TTypeNext = undefined,>({
      params,
      pathname,
      root,
    }: LocationUpdateModel<TTypeNext>) => {
      replace({
        params: { ...params, previous: location },
        pathname: trimPathname(pathname),
      });
    },
  };
};
