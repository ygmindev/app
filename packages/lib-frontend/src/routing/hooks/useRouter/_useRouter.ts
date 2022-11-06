import type { _UseRouterModel } from '@lib/frontend/routing/hooks/useRouter/_useRouter.models';
import type { LocationModel } from '@lib/frontend/routing/routing.models';
import { merge } from '@lib/shared/core/utils/merge/merge';
import { matchPath, useLocation, useNavigate, useParams } from 'react-router-dom';

export const _useRouter = <TParams = undefined>(): _UseRouterModel<TParams> => {
  const navigate = useNavigate();
  const location = useLocation();
  const params = useParams();

  return {
    isActive: ({ from, isExact, to }) => {
      const match = matchPath({ end: isExact, path: from }, to || location.pathname);
      return match !== null;
    },

    location: {
      params: merge<TParams>({ values: [location.state, params] }),
      pathname: location.pathname,
    },

    push: <TNextParams = undefined>({ params, pathname }: LocationModel<TNextParams>) =>
      navigate(pathname, { state: params }),

    replace: <TNextParams = undefined>({ params, pathname }: LocationModel<TNextParams>) =>
      navigate(pathname, { replace: true, state: params }),
  };
};
