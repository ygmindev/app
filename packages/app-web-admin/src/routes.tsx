import { AdminHomePage } from '#lib-frontend/admin/pages/AdminHomePage/AdminHomePage';
import { ResourcePage } from '#lib-frontend/resource/pages/ResourcePage/ResourcePage';
import { RESOURCE } from '#lib-frontend/resource/resource.constants';
import { type RouteModel } from '#lib-frontend/route/route.models';
import { getRoutes } from '#lib-frontend/route/utils/getRoutes/getRoutes';

export const routes: Array<RouteModel> = getRoutes({
  appRoutes: [
    {
      element: <AdminHomePage />,
      pathname: '/',
    },

    {
      element: <ResourcePage />,
      pathname: `${RESOURCE}/:id`,
    },
  ],
});
