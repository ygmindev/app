import { type RoutesConfigModel } from '@lib/config/routes/routes.models';
import { defineConfig } from '@lib/config/utils/defineConfig/defineConfig';
import { AppHomePage } from '@lib/frontend/app/pages/AppHomePage/AppHomePage';
import { commerceRoutes } from '@lib/frontend/commerce/commerce.routes';
import { HOME } from '@lib/frontend/core/core.constants';
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
    ]),
  }),
});

export default config;
