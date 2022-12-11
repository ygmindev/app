import { _useRouter } from '@lib/frontend/routing/hooks/useRouter/_useRouter';
import type { UseRouterModel } from '@lib/frontend/routing/hooks/useRouter/useRouter.models';
import type { LocationModel } from '@lib/frontend/routing/routing.models';
import { trimPathname } from '@lib/frontend/routing/utils/trimPathname/trimPathname';
import { split } from 'lodash';

export const useRouter = <TParams = undefined,>(): UseRouterModel<TParams> => {
  const { back, isActive, location, push, replace } = _useRouter<TParams>();
  const paths = split(location.pathname, '/');

  const _push = <TNextParams = undefined,>({
    params,
    pathname,
  }: LocationModel<TNextParams>): void => push({ params, pathname: trimPathname(pathname) });

  return {
    back,

    isActive: (params) =>
      isActive({
        ...params,
        from: trimPathname(params.from),
        to: params.to ? trimPathname(params.to) : undefined,
      }),

    location,

    push: <TNextParams = undefined,>(params: LocationModel<TNextParams>) => _push(params),

    replace: <TNextParams = undefined,>({ params, pathname }: LocationModel<TNextParams>) =>
      replace({ params, pathname: trimPathname(pathname) }),

    up:
      paths.length > 1 ? () => _push({ pathname: paths.slice(0, -1).join('/') || '/' }) : undefined,
  };
};
