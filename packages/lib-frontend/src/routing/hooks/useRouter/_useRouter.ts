import type { _UseRouterModel } from '@lib/frontend/routing/hooks/useRouter/_useRouter.models';
import type { LocationModel } from '@lib/frontend/routing/routing.models';
import { trimPathname } from '@lib/frontend/routing/utils/trimPathname/trimPathname';
import { matchPath, useLocation, useNavigate, useParams } from 'react-router-dom';

export const _useRouter = <TParams = undefined>(): _UseRouterModel<TParams> => {
  const navigate = useNavigate();
  const location = useLocation();
  const params = useParams();

  return {
    back: () => navigate(-1),

    isActive: (pathname) => {
      const match = matchPath(pathname, location.pathname);
      return match !== null;
    },

    location: {
      params: { ...location.state, ...params } as TParams,
      pathname: location.pathname,
    },

    push: <TParams = undefined>({ params, pathname }: LocationModel<TParams>) =>
      navigate(trimPathname(pathname), { state: params }),

    replace: <TParams = undefined>({ params, pathname }: LocationModel<TParams>) =>
      navigate(trimPathname(pathname), { replace: true, state: params }),
  };
};
