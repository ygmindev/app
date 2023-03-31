import type { _UseRouterModel } from '@lib/frontend/route/hooks/useRouter/_useRouter.models';
import type { PathUpdateParamsModel } from '@lib/frontend/route/hooks/useRouter/useRouter.models';
import { matchPath, useLocation, useNavigate, useParams } from 'react-router-dom';

export const _useRouter = <TParams = void,>(): _UseRouterModel<TParams> => {
  const navigate = useNavigate();
  const location = useLocation();
  const params = useParams();

  return {
    back: async () => navigate(-1),

    isActive: ({ from, isExact = false, pathname }) => {
      const match = matchPath(
        { end: isExact, path: pathname.replaceAll('*', '') },
        from || location.pathname,
      );
      return match !== null;
    },

    location: {
      params: { ...location.state, ...params },
      pathname: location.pathname,
    },

    push: async <TNextParams = void,>({ params, pathname }: PathUpdateParamsModel<TNextParams>) =>
      navigate(pathname, { state: params }),

    replace: async <TNextParams = void,>({
      params,
      pathname,
    }: PathUpdateParamsModel<TNextParams>) => navigate(pathname, { replace: true, state: params }),
  };
};
