import { type RoutesConfigModel } from '@lib/config/routes/routes.models';
import { defineConfig } from '@lib/config/utils/defineConfig/defineConfig';
import { resourceRoute } from '@lib/frontend/admin/pages/ResourcePage/ResourcePage.route';
import { Text } from '@lib/frontend/core/components/Text/Text';
import { HOME } from '@lib/frontend/core/core.constants';
import { RESOURCE } from '@lib/frontend/resource/resource.constants';
import { ROUTE_NAVIGATION } from '@lib/frontend/route/route.constants';
import { getRoutes } from '@lib/frontend/route/utils/getRoutes/getRoutes';
import { ROUTE } from '@lib/shared/route/route.constants';

export const config = defineConfig<RoutesConfigModel>({
  params: () => ({
    routes: getRoutes([
      {
        isProtectable: true,
        namespaces: [ROUTE, RESOURCE],
        navigation: ROUTE_NAVIGATION.NAVIGATION,
        pathname: '/',
        routes: [
          {
            element: <Text>home</Text>,
            icon: 'home',
            pathname: HOME,
            title: ({ t }) => t('route:home'),
          },

          resourceRoute,
        ],
      },
    ]),
  }),
});

export default config;
