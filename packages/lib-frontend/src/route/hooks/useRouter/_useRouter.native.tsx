import { useMemo } from 'react';
import {
  matchPath,
  useLocation,
  useNavigate,
  useParams,
  useSearchParams,
} from 'react-router-native';

import { type _UseRouterModel } from '#lib-frontend/route/hooks/useRouter/_useRouter.models';
import { type LocationContextModel, type RouteUpdateModel } from '#lib-frontend/route/route.models';

export const _useRouter = <TType = object,>(): _UseRouterModel<TType> => {
  const navigate = useNavigate();
  const location = useLocation();
  const routeParams = useParams();
  const [searchParams, searchParamsSet] = useSearchParams();
  const params = useMemo(() => {
    delete (routeParams as Record<string, string>)['*'];
    return { ...Object.fromEntries(searchParams.entries()), ...routeParams } as TType;
  }, [searchParams, routeParams]);

  return {
    back: () => navigate(-1),

    isActive: ({ from, isExact = false, pathname }) => {
      if (!pathname) {
        return false;
      }
      const match = matchPath({ end: isExact, path: pathname }, from ?? location.pathname);
      return match !== null;
    },

    location: {
      context: { previous: (location.state as LocationContextModel)?.previous },
      params,
      pathname: location.pathname,
    },

    push: <TTypeNext,>({ context, params, pathname }: RouteUpdateModel<TTypeNext>) => {
      navigate(pathname, { state: context });
      params && searchParamsSet(params);
    },

    replace: <TTypeNext,>({ context, params, pathname }: RouteUpdateModel<TTypeNext>) => {
      navigate(pathname, { replace: true, state: context });
      params && searchParamsSet(params);
    },
  };
};
