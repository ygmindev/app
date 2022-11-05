import type { FCModel } from '@lib/frontend/core/core.models';
import { Page } from '@lib/frontend/routing/components/Page/Page';
import type { PageModel } from '@lib/frontend/routing/components/Page/Page.models';
import { _Router } from '@lib/frontend/routing/containers/Router/_Router';
import type { RouterPropsModel } from '@lib/frontend/routing/containers/Router/Router.models';

const _pageToRoute = (routes: Array<PageModel>): Array<PageModel> =>
  routes.map((route) => ({
    ...route,
    element: <Page {...route} />,
    routes: route.routes
      ? _pageToRoute(
          route.routes.map((subRoute) => ({
            ...subRoute,
            isProtected: route.isProtected || subRoute.isProtected,
          })),
        )
      : undefined,
  }));

export const Router: FCModel<RouterPropsModel> = ({ routes, ...props }) => (
  <_Router
    {...props}
    routes={_pageToRoute(routes)}
  />
);
