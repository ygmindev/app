import { matchPath, useLocation, useNavigate, useParams } from 'react-router-dom';

import type { _UseRouterModel } from '#lib-frontend/route/hooks/useRouter/_useRouter.models';
import type { PathUpdateParamsModel } from '#lib-frontend/route/hooks/useRouter/useRouter.models';
import type { LocationParamsModel } from '#lib-frontend/route/route.models';

export const _useRouter = <
  TParams extends LocationParamsModel = LocationParamsModel,
>(): _UseRouterModel<TParams> => {
  const navigate = useNavigate();
  const location = useLocation();
  const params = useParams();

  const paramsF = { ...location.state, ...params };
  delete paramsF['*'];

  return {
    back: async () => navigate(-1),

    isActive: ({ from, isExact = false, pathname }) => {
      if (!pathname) {
        return false;
      }
      const match = matchPath(
        { end: isExact, path: pathname.replaceAll('*', '') },
        from || location.pathname,
      );
      return match !== null;
    },

    location: {
      params: paramsF,
      pathname: location.pathname,
    },

    push: async <TNextParams extends LocationParamsModel = LocationParamsModel>({
      params,
      pathname,
    }: PathUpdateParamsModel<TNextParams>) => navigate(pathname, { state: params }),

    replace: async <TNextParams extends LocationParamsModel = LocationParamsModel>({
      params,
      pathname,
    }: PathUpdateParamsModel<TNextParams>) => navigate(pathname, { replace: true, state: params }),
  };
};
