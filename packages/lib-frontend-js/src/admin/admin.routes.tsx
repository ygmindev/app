import { ADMIN } from '@lib/frontend/admin/admin.constants';
// import { AccessTable } from '@lib/frontend/auth/containers/AccessTable/AccessTable';
import { RESOURCE } from '@lib/frontend/resource/resource.constants';
// import { ROUTE_NAVIGATION } from '@lib/frontend/route/route.constants';
import { type RouteModel } from '@lib/frontend/route/route.models';
import { UserTable } from '@lib/frontend/user/containers/UserTable/UserTable';
import { USER_RESOURCE_NAME } from '@lib/model/user/User/User.constants';

export const adminRoutes: Array<RouteModel> = [
  {
    pathname: ADMIN,
    routes: [
      {
        icon: 'database',
        //   navigation: ROUTE_NAVIGATION.NAVIGATION,
        pathname: RESOURCE,
        routes: [
          // {
          //   element: <AccessTable />,
          //   pathname: ACCESS_RESOURCE_NAME,
          // },
          {
            element: <UserTable />,
            pathname: USER_RESOURCE_NAME,
          },
        ],
        title: ({ t }) => t('resource:resource_other'),
      },
    ],
  },
];
