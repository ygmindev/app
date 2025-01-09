import { VendorTable } from '@lib/frontend/admin/containers/VendorTable/VendorTable';
import { AccessTable } from '@lib/frontend/auth/containers/AccessTable/AccessTable';
import { OtpTable } from '@lib/frontend/auth/containers/OtpTable/OtpTable';
import { ProductTable } from '@lib/frontend/commerce/containers/ProductTable/ProductTable';
import { Text } from '@lib/frontend/core/components/Text/Text';
import { HOME } from '@lib/frontend/core/core.constants';
import { GroupTable } from '@lib/frontend/group/containers/GroupTable/GroupTable';
import { RESOURCE } from '@lib/frontend/resource/resource.constants';
import { ROUTE_NAVIGATION } from '@lib/frontend/route/route.constants';
import { type RouteModel } from '@lib/frontend/route/route.models';
import { getRoutes } from '@lib/frontend/route/utils/getRoutes/getRoutes';
import { UserTable } from '@lib/frontend/user/containers/UserTable/UserTable';
import { VENDOR_RESOURCE_NAME } from '@lib/shared/admin/resources/Vendor/Vendor.constants';
import { ACCESS_RESOURCE_NAME } from '@lib/shared/auth/resources/Access/Access.constants';
import { OTP_RESOURCE_NAME } from '@lib/shared/auth/resources/Otp/Otp.constants';
import { PRODUCT_RESOURCE_NAME } from '@lib/shared/commerce/resources/Product/Product.constants';
import { GROUP_RESOURCE_NAME } from '@lib/shared/group/resources/Group/Group.constants';
import { ROUTE } from '@lib/shared/route/route.constants';
import { USER_RESOURCE_NAME } from '@lib/shared/user/resources/User/User.constants';

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
            element: <GroupTable />,
            pathname: GROUP_RESOURCE_NAME,
          },
          {
            element: <OtpTable />,
            pathname: OTP_RESOURCE_NAME,
          },
          {
            element: <UserTable />,
            pathname: USER_RESOURCE_NAME,
          },
          {
            element: <VendorTable />,
            pathname: VENDOR_RESOURCE_NAME,
          },
          {
            element: <ProductTable />,
            pathname: PRODUCT_RESOURCE_NAME,
          },
        ],
        title: ({ t }) => t('resource:resource_other'),
      },
    ],
  },
]);
