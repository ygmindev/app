import { matchPath, useLocation, useNavigate, useParams } from 'react-router-native';

import { type _UseRouterModel } from '#lib-frontend/route/hooks/useRouter/_useRouter.models';
import { type LocationParamsModel, type RouteUpdateModel } from '#lib-frontend/route/route.models';

export const _useRouter = <
  TType extends LocationParamsModel = LocationParamsModel,
>(): _UseRouterModel<TType> => {
  const navigate = useNavigate();
  const location = useLocation();
  const params = useParams();

  const paramsF = { ...location.state, ...params } as TType;
  delete (paramsF as Record<string, string>)['*'];

  return {
    back: async () => navigate(-1),

    isActive: ({ from, isExact = false, pathname }) => {
      if (!pathname) {
        return false;
      }
      const match = matchPath({ end: isExact, path: pathname }, from || location.pathname);
      return match !== null;
    },

    location: {
      params: paramsF,
      pathname: location.pathname,
    },

    push: async <TNextType extends LocationParamsModel = LocationParamsModel>({
      params,
      pathname,
    }: RouteUpdateModel<TNextType>) => navigate(pathname, { state: params }),

    replace: async <TNextType extends LocationParamsModel = LocationParamsModel>({
      params,
      pathname,
    }: RouteUpdateModel<TNextType>) => navigate(pathname, { replace: true, state: params }),
  };
};
