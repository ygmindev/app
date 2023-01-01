import { isSsr } from '@lib/frontend/platform/utils/isSsr/isSsr';
import type { _UseRouterModel } from '@lib/frontend/route/hooks/useRouter/_useRouter.models';
import type { LocationModel } from '@lib/frontend/route/route.models';
import { merge } from '@lib/shared/core/utils/merge/merge';
import { createBrowserHistory, createMemoryHistory } from 'history';

const _history = isSsr ? createMemoryHistory() : createBrowserHistory();

export const _useRouter = <TParams = undefined,>(): _UseRouterModel<TParams> => ({
  back: () => _history.back(),

  location: {
    params: merge<TParams>({
      values: [
        _history.location.state,
        !isSsr && new URLSearchParams(window.location.search),
      ].filter(Boolean) as Array<TParams>,
    }),
    pathname: _history.location.pathname,
  },

  push: <TNextParams = undefined,>({ params, pathname }: LocationModel<TNextParams>) =>
    _history.push(pathname, params),

  replace: <TNextParams = undefined,>({ params, pathname }: LocationModel<TNextParams>) =>
    _history.replace(pathname, params),
});
