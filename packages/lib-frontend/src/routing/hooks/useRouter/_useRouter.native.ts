import type { _UseRouterModel } from '@lib/frontend/routing/hooks/useRouter/_useRouter.models';
import type { LocationModel } from '@lib/frontend/routing/routing.models';
import { useLocation, useMatch, useNavigate, useParams } from 'react-router-native';

export const _useRouter = <TParams>(): _UseRouterModel<TParams> => {
  const navigate = useNavigate();
  const location = useLocation();
  const params = useParams();

  return {
    back: () => navigate(-1),

    isActive: (pathname) => {
      const match = useMatch(pathname);
      return match !== null;
    },

    location: {
      params: { ...location.state, ...params } as TParams,
      pathname: location.pathname,
    },

    push: <TParams = undefined>({ params, pathname }: LocationModel<TParams>) =>
      navigate(pathname, { state: params }),

    replace: <TParams = undefined>({ params, pathname }: LocationModel<TParams>) =>
      navigate(pathname, { replace: true, state: params }),
  };
};
