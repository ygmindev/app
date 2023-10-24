import { AppHomePage } from '#lib-frontend/app/pages/AppHomePage/AppHomePage';
import { FORM } from '#lib-frontend/data/data.constants';
import { GROUP } from '#lib-frontend/group/group.constants';
import { GroupFormPage } from '#lib-frontend/group/pages/GroupFormPage/GroupFormPage';
import { GroupPage } from '#lib-frontend/group/pages/GroupPage/GroupPage';
import { issuerRoutes } from '#lib-frontend/issuer/routes';
import { type RouteModel } from '#lib-frontend/route/route.models';
import { getRoutes } from '#lib-frontend/route/utils/getRoutes/getRoutes';
import { underwriterRoutes } from '#lib-frontend/underwriter/routes';

export const routes: Array<RouteModel> = getRoutes({
  appRoutes: [
    {
      element: <AppHomePage />,
      isProtectable: true,
      pathname: '/',
    },

    {
      isProtectable: true,
      pathname: GROUP,
      routes: [
        {
          element: <GroupFormPage />,
          pathname: FORM,
        },

        {
          element: <GroupPage />,
          pathname: ':id',
          routes: [...issuerRoutes, ...underwriterRoutes],
        },
      ],
    },
  ],
});
