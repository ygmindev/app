import { type _UseRouterModel } from '@lib/frontend/route/hooks/useRouter/_useRouter.models';
import { type LocationParamsModel, type RouteUpdateModel } from '@lib/frontend/route/route.models';
import { useMemo } from 'react';
import { generatePath } from 'react-router';
import { matchPath, useLocation, useNavigate, useParams } from 'react-router-dom';

export const _useRouter = <TType = object,>(): _UseRouterModel<TType> => {
  const navigate = useNavigate();
  const location = useLocation();
  const routeParams = useParams();

  const params = useMemo(() => {
    delete (routeParams as Record<string, string>)['*'];
    return { ...routeParams, ...location.state } as TType & LocationParamsModel;
  }, [location.state, routeParams]);

  return {
    back: () => navigate(-1),

    getPath: <TTypeNext,>(pathname: string, params?: TTypeNext) =>
      generatePath(pathname, params as object),

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

    location: { params, pathname: location.pathname },

    push: <TTypeNext,>({ params, pathname }: RouteUpdateModel<TTypeNext>) => {
      navigate(pathname, { state: params });
    },

    replace: <TTypeNext,>({ params, pathname }: RouteUpdateModel<TTypeNext>) => {
      navigate(pathname, { replace: true, state: params });
    },
  };
};
