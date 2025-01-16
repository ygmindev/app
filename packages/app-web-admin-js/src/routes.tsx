import { resourceRoute } from '@lib/frontend/admin/pages/ResourcePage/ResourcePage.route';
import { Text } from '@lib/frontend/core/components/Text/Text';
import { HOME } from '@lib/frontend/core/core.constants';
import { RESOURCE } from '@lib/frontend/resource/resource.constants';
import { ROUTE_NAVIGATION } from '@lib/frontend/route/route.constants';
import { type RouteModel } from '@lib/frontend/route/route.models';
import { getRoutes } from '@lib/frontend/route/utils/getRoutes/getRoutes';
import { ROUTE } from '@lib/shared/route/route.constants';

export const routes: Array<RouteModel> = getRoutes([
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
]);
