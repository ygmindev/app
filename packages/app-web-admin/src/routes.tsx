import { DEPENDENCY } from '#lib-frontend/admin/admin.constants';
import { AdminHomePage } from '#lib-frontend/admin/pages/AdminHomePage/AdminHomePage';
import { DependenciesPage } from '#lib-frontend/admin/pages/DependenciesPage/DependenciesPage';
import { ResourcePage } from '#lib-frontend/resource/pages/ResourcePage/ResourcePage';
import { RESOURCE } from '#lib-frontend/resource/resource.constants';
import { type RouteModel } from '#lib-frontend/route/route.models';
import { getRouteGroup } from '#lib-frontend/route/utils/getRouteGroup/getRouteGroup';
import { getRoutes } from '#lib-frontend/route/utils/getRoutes/getRoutes';

export const routes: Array<RouteModel> = getRoutes({
  appRoutes: [
    {
      element: <AdminHomePage />,
      pathname: '/',
    },

    {
      element: <ResourcePage />,
      isProtectable: true,
      pathname: `${RESOURCE}/:resourceid?`,
    },

    getRouteGroup({
      element: <DependenciesPage />,
      pathname: DEPENDENCY,
    }),
  ],
});
