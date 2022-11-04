import type { _UseRouterModel } from '@lib/frontend/routing/hooks/useRouter/_useRouter.models';
import type { LocationModel, LocationParamsModel } from '@lib/frontend/routing/routing.models';
import { matchPath, useLocation, useNavigate, useParams } from 'react-router-dom';

export const _useRouter = <TParams = undefined>(): _UseRouterModel<TParams> => {
  const navigate = useNavigate();
  const location = useLocation();
  const params = useParams();

  return {
    isActive: (pathname) => {
      const match = matchPath(pathname, location.pathname);
      return match !== null;
    },

    location: {
      params: { ...location.state, ...params } as TParams & LocationParamsModel,
      pathname: location.pathname,
    },

    push: <TNextParams = undefined>({ params, pathname }: LocationModel<TNextParams>) =>
      navigate(pathname, { state: params }),

    replace: <TNextParams = undefined>({ params, pathname }: LocationModel<TNextParams>) =>
      navigate(pathname, { replace: true, state: params }),
  };
};
