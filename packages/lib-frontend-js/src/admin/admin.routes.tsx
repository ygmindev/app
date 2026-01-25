import { ADMIN } from '@lib/frontend/admin/admin.constants';
import { AccessTable } from '@lib/frontend/auth/containers/AccessTable/AccessTable';
import { RoleTable } from '@lib/frontend/auth/containers/RoleTable/RoleTable';
import { GroupTable } from '@lib/frontend/group/containers/GroupTable/GroupTable';
// import { AccessTable } from '@lib/frontend/auth/containers/AccessTable/AccessTable';
import { RESOURCE } from '@lib/frontend/resource/resource.constants';
import { ROUTE_NAVIGATION } from '@lib/frontend/route/route.constants';
// import { ROUTE_NAVIGATION } from '@lib/frontend/route/route.constants';
import { type RouteModel } from '@lib/frontend/route/route.models';
import { UserTable } from '@lib/frontend/user/containers/UserTable/UserTable';
import { ACCESS_RESOURCE_NAME } from '@lib/model/auth/Access/Access.constants';
import { ROLE_RESOURCE_NAME } from '@lib/model/auth/Role/Role.constants';
import { GROUP_RESOURCE_NAME } from '@lib/model/group/Group/Group.constants';
import { USER_RESOURCE_NAME } from '@lib/model/user/User/User.constants';

export const adminRoutes: Array<RouteModel> = [
  {
    pathname: ADMIN,
    routes: [
      {
        icon: 'database',
        navigation: ROUTE_NAVIGATION.TAB,
        pathname: RESOURCE,
        routes: [
          {
            element: <AccessTable />,
            pathname: ACCESS_RESOURCE_NAME,
          },

          {
            element: <UserTable />,
            pathname: USER_RESOURCE_NAME,
          },

          {
            element: <GroupTable />,
            pathname: GROUP_RESOURCE_NAME,
          },

          {
            element: <RoleTable />,
            pathname: ROLE_RESOURCE_NAME,
          },
        ],
        title: ({ t }) => t('resource:resource_other'),
      },
    ],
  },
];
