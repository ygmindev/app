import { DEPENDENCY } from '#lib-frontend/admin/admin.constants';
import { AdminHomePage } from '#lib-frontend/admin/pages/AdminHomePage/AdminHomePage';
import { DependenciesPage } from '#lib-frontend/admin/pages/DependenciesPage/DependenciesPage';
import { ResourceDetailPage } from '#lib-frontend/resource/pages/ResourceDetailPage/ResourceDetailPage';
import { ResourcePage } from '#lib-frontend/resource/pages/ResourcePage/ResourcePage';
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
      routes: [
        {
          element: <ResourceDetailPage />,
          pathname: 'vendor',
        },
      ],
    }),

    getRouteList({
      element: <DependenciesPage />,
      pathname: DEPENDENCY,
    }),
  ],
});
