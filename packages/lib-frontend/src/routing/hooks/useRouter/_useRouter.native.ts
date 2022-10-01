import type { _UseRouterModel } from '@lib/frontend/routing/hooks/useRouter/_useRouter.models';
import { useLocation, useMatch, useNavigate } from 'react-router-native';

export const _useRouter = <TParams>(): _UseRouterModel<TParams> => {
  const navigate = useNavigate();
  const location = useLocation();
  return {
    back: () => navigate(-1),

    isActive: (pathname) => {
      const match = useMatch(pathname);
      return match !== null;
    },

    location: { params: location.state as TParams, pathname: location.pathname },

    push: <TParams>(pathname: string, params?: TParams) => navigate(pathname, { state: params }),

    replace: <TParams>(pathname: string, params?: TParams) =>
      navigate(pathname, { replace: true, state: params }),
  };
};
