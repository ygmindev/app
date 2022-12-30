import type { _UseRouterModel } from '@lib/frontend/route/hooks/useRouter/_useRouter.models';
import type { LocationModel } from '@lib/frontend/route/route.models';
import { merge } from '@lib/shared/core/utils/merge/merge';
import history from 'history/browser';

export const _useRouter = <TParams = undefined,>(): _UseRouterModel<TParams> => ({
  back: () => history.back(),

  location: {
    params: merge<TParams>({
      values: [
        history.location.state as TParams,
        new URLSearchParams(window.location.search) as TParams,
      ],
    }),
    pathname: history.location.pathname,
  },

  push: <TNextParams = undefined,>({ params, pathname }: LocationModel<TNextParams>) =>
    history.push(pathname, params),

  replace: <TNextParams = undefined,>({ params, pathname }: LocationModel<TNextParams>) =>
    history.replace(pathname, params),
});
