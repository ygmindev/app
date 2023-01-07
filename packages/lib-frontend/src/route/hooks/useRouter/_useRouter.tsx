import type { _UseRouterModel } from '@lib/frontend/route/hooks/useRouter/_useRouter.models';
import type { LocationModel } from '@lib/frontend/route/route.models';
import { useLocation, useNavigate, useParams } from 'react-router-dom';

export const _useRouter = <TParams = undefined,>(): _UseRouterModel<TParams> => {
  const navigate = useNavigate();
  const location = useLocation();
  const params = useParams();

  return {
    back: () => navigate(-1),

    location: {
      params: { ...location.state, ...params } as TParams,
      pathname: location.pathname,
    },

    push: <TParams = undefined,>({ params, pathname }: LocationModel<TParams>) =>
      navigate(pathname, { state: params }),

    replace: <TParams = undefined,>({ params, pathname }: LocationModel<TParams>) =>
      navigate(pathname, { replace: true, state: params }),
  };
};
