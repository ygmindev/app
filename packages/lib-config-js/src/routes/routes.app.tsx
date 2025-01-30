import { type RoutesConfigModel } from '@lib/config/routes/routes.models';
import { defineConfig } from '@lib/config/utils/defineConfig/defineConfig';
import { AppHomePage } from '@lib/frontend/app/pages/AppHomePage/AppHomePage';
import { commerceRoutes } from '@lib/frontend/commerce/commerce.routes';
import { HOME } from '@lib/frontend/core/core.constants';
import { FORM } from '@lib/frontend/data/data.constants';
import { GROUP } from '@lib/frontend/group/group.constants';
import { GroupFormPage } from '@lib/frontend/group/pages/GroupFormPage/GroupFormPage';
import { GroupPage } from '@lib/frontend/group/pages/GroupPage/GroupPage';
import { getRoutes } from '@lib/frontend/route/utils/getRoutes/getRoutes';

export const config = defineConfig<RoutesConfigModel>({
  params: () => ({
    routes: getRoutes([
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
    ]),
  }),
});

export default config;
