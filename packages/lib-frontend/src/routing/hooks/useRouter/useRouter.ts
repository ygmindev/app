import { _useRouter } from '@lib/frontend/routing/hooks/useRouter/_useRouter';
import type { UseRouterModel } from '@lib/frontend/routing/hooks/useRouter/useRouter.models';
import type { LocationModel } from '@lib/frontend/routing/routing.models';
import { trimPathname } from '@lib/frontend/routing/utils/trimPathname/trimPathname';
import { split } from 'lodash';

export const useRouter = <TParams = undefined>(): UseRouterModel<TParams> => {
  const { isActive, location, push, replace } = _useRouter<TParams>();

  const paths = split(location.pathname, '/');

  return {
    back: location.params?.prev ? () => push(location.params?.prev as LocationModel) : undefined,

    isActive: (pathname) => isActive(trimPathname(pathname)),

    location,

    push: <TNextParams = undefined>({ params, pathname }: LocationModel<TNextParams>) =>
      push({ params: { ...params, prev: location }, pathname: trimPathname(pathname) }),

    replace: <TNextParams = undefined>({ params, pathname }: LocationModel<TNextParams>) =>
      replace({
        params: { ...params, prev: location.params?.prev },
        pathname: trimPathname(pathname),
      }),

    up:
      paths.length > 1 ? () => push({ pathname: paths.slice(0, -1).join('/') || '/' }) : undefined,
  };
};
