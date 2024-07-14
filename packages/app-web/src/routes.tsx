import { AppHomePage } from '@lib/frontend/app/pages/AppHomePage/AppHomePage';
import { commerceRoutes } from '@lib/frontend/commerce/commerce.routes';
import { HOME } from '@lib/frontend/core/core.constants';
import { FORM } from '@lib/frontend/data/data.constants';
import { GROUP } from '@lib/frontend/group/group.constants';
import { GroupFormPage } from '@lib/frontend/group/pages/GroupFormPage/GroupFormPage';
import { GroupPage } from '@lib/frontend/group/pages/GroupPage/GroupPage';
import { type RouteModel } from '@lib/frontend/route/route.models';
import { getRoutes } from '@lib/frontend/route/utils/getRoutes/getRoutes';

export const routes: Array<RouteModel> = getRoutes({
  appRoutes: [
    {
      element: <AppHomePage />,
      isProtectable: true,
      pathname: HOME,
    },

    ...commerceRoutes,

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
          pathname: ':groupid',
        },
      ],
    },
  ],
});
