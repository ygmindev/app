import { DEPENDENCY } from '@lib/frontend/admin/admin.constants';
import { AdminHomePage } from '@lib/frontend/admin/pages/AdminHomePage/AdminHomePage';
import { DependenciesPage } from '@lib/frontend/admin/pages/DependenciesPage/DependenciesPage';
import { ResourcePage } from '@lib/frontend/resource/pages/ResourcePage/ResourcePage';
import { RESOURCE_PAGE_ROUTES } from '@lib/frontend/resource/pages/ResourcePage/ResourcePage.constants';
import { RESOURCE } from '@lib/frontend/resource/resource.constants';
import { ROUTE_NAVIGATION } from '@lib/frontend/route/route.constants';
import { type RouteModel } from '@lib/frontend/route/route.models';
import { getRoutes } from '@lib/frontend/route/utils/getRoutes/getRoutes';

export const routes: Array<RouteModel> = getRoutes({
  appRoutes: [
    {
      element: <AdminHomePage />,
      pathname: '/',
    },

    {
      element: <ResourcePage />,
      isProtectable: true,
      navigation: ROUTE_NAVIGATION.TRANSITION,
      pathname: RESOURCE,
      routes: RESOURCE_PAGE_ROUTES,
    },

    {
      element: <DependenciesPage />,
      pathname: DEPENDENCY,
    },
  ],
});
