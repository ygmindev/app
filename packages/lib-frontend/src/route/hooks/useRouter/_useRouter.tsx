import { useMemo } from 'react';
import { matchPath, useLocation, useNavigate, useSearchParams } from 'react-router-dom';

import { type _UseRouterModel } from '#lib-frontend/route/hooks/useRouter/_useRouter.models';
import { type LocationContextModel, type RouteUpdateModel } from '#lib-frontend/route/route.models';

export const _useRouter = <TType = object,>(): _UseRouterModel<TType> => {
  const navigate = useNavigate();
  const location = useLocation();
  const [searchParams, searchParamsSet] = useSearchParams();
  const params = useMemo(() => Object.fromEntries(searchParams.entries()) as TType, []);

  return {
    back: async () => navigate(-1),

    isActive: ({ from, isExact = false, pathname }) => {
      if (!pathname) {
        return false;
      }
      const match = matchPath(
        { end: isExact, path: pathname.replaceAll('*', '') },
        from ?? location.pathname,
      );
      return match !== null;
    },

    location: {
      context: { previous: (location.state as LocationContextModel)?.previous },
      params,
      pathname: location.pathname,
    },

    push: async <TTypeNext,>({ context, params, pathname }: RouteUpdateModel<TTypeNext>) => {
      navigate(pathname, { state: context });
      params && searchParamsSet(params);
    },

    replace: async <TTypeNext,>({ context, params, pathname }: RouteUpdateModel<TTypeNext>) => {
      navigate(pathname, { replace: true, state: context });
      params && searchParamsSet(params);
    },
  };
};
