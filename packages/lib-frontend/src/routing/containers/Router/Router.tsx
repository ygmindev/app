import type { FCModel } from '@lib/frontend/core/core.models';
import { Page } from '@lib/frontend/routing/components/Page/Page';
import type { PagePropsModel } from '@lib/frontend/routing/components/Page/Page.models';
import { _Router } from '@lib/frontend/routing/containers/Router/_Router';
import type { RouterPropsModel } from '@lib/frontend/routing/containers/Router/Router.models';
import { trimPathname } from '@lib/frontend/routing/utils/trimPathname/trimPathname';

const _pageToRoute = (routes: Array<PagePropsModel>): Array<PagePropsModel> =>
  routes.map(({ element, pathname = '/', ...route }) => {
    const _pathname = trimPathname(pathname);
    return {
      ...route,
      element: (
        <Page
          {...route}
          element={element}
          pathname={_pathname}
        />
      ),
      pathname: _pathname,
      routes: route.routes
        ? _pageToRoute(
            route.routes.map((child) => ({
              ...child,
              isProtected: route.isProtected || child.isProtected,
            })),
          )
        : undefined,
    };
  });

export const Router: FCModel<RouterPropsModel> = ({ routes, ...props }) => (
  <_Router
    {...props}
    routes={_pageToRoute(routes)}
  />
);
