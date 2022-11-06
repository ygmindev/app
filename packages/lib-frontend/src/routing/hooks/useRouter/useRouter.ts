import { useSelector } from '@lib/frontend/root/hooks/useSelector/useSelector';
import { dispatch } from '@lib/frontend/root/stores/store/store';
import { _useRouter } from '@lib/frontend/routing/hooks/useRouter/_useRouter';
import type { UseRouterModel } from '@lib/frontend/routing/hooks/useRouter/useRouter.models';
import type { LocationModel } from '@lib/frontend/routing/routing.models';
import { routingActions } from '@lib/frontend/routing/stores/reducer/reducer';
import { trimPathname } from '@lib/frontend/routing/utils/trimPathname/trimPathname';
import { isEqual } from '@lib/shared/core/utils/isEqual/isEqual';
import { split } from 'lodash';

export const useRouter = <TParams = undefined>(): UseRouterModel<TParams> => {
  const { isActive, location, push, replace } = _useRouter<TParams>();
  const previous = useSelector((state) => state.routing.previous);

  const paths = split(location.pathname, '/');

  return {
    back: previous ? () => push(previous) : undefined,

    isActive: (params) =>
      isActive({
        ...params,
        from: trimPathname(params.from),
        to: params.to ? trimPathname(params.to) : undefined,
      }),

    location,

    push: <TNextParams = undefined>({ params, pathname }: LocationModel<TNextParams>) => {
      const locationNew = { params, pathname: trimPathname(pathname) };
      if (!isEqual(locationNew, location)) {
        dispatch(routingActions.setPrevious(location));
        push({ params, pathname: trimPathname(pathname) });
      }
    },

    replace: <TNextParams = undefined>({ params, pathname }: LocationModel<TNextParams>) =>
      replace({ params, pathname: trimPathname(pathname) }),

    up:
      paths.length > 1 ? () => push({ pathname: paths.slice(0, -1).join('/') || '/' }) : undefined,
  };
};
