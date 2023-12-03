import { DEPENDENCY } from '#lib-frontend/admin/admin.constants';
import { AdminHomePage } from '#lib-frontend/admin/pages/AdminHomePage/AdminHomePage';
import { DependenciesPage } from '#lib-frontend/admin/pages/DependenciesPage/DependenciesPage';
import { ResourcePage } from '#lib-frontend/resource/pages/ResourcePage/ResourcePage';
import { RESOURCE_PAGE_ROUTES } from '#lib-frontend/resource/pages/ResourcePage/ResourcePage.constants';
import { RESOURCE } from '#lib-frontend/resource/resource.constants';
import { type RouteModel } from '#lib-frontend/route/route.models';
import { getRouteList } from '#lib-frontend/route/utils/getRouteList/getRouteList';
import { getRoutes } from '#lib-frontend/route/utils/getRoutes/getRoutes';

export const routes: Array<RouteModel> = getRoutes({
  appRoutes: [
    {
      element: <AdminHomePage />,
      pathname: '/',
    },

    getRouteList({
      element: <ResourcePage />,
      isProtectable: true,
      pathname: RESOURCE,
      routes: RESOURCE_PAGE_ROUTES,
    }),

    getRouteList({
      element: <DependenciesPage />,
      pathname: DEPENDENCY,
    }),
  ],
});
