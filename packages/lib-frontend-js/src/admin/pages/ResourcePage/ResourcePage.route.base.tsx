import { VendorTable } from '@lib/frontend/admin/containers/VendorTable/VendorTable';
import { AccessTable } from '@lib/frontend/auth/containers/AccessTable/AccessTable';
import { OtpTable } from '@lib/frontend/auth/containers/OtpTable/OtpTable';
import { ProductTable } from '@lib/frontend/commerce/containers/ProductTable/ProductTable';
import { GroupTable } from '@lib/frontend/group/containers/GroupTable/GroupTable';
import { RESOURCE } from '@lib/frontend/resource/resource.constants';
import { ROUTE_NAVIGATION } from '@lib/frontend/route/route.constants';
import { type RouteModel } from '@lib/frontend/route/route.models';
import { UserTable } from '@lib/frontend/user/containers/UserTable/UserTable';
import { VENDOR_RESOURCE_NAME } from '@lib/shared/admin/resources/Vendor/Vendor.constants';
import { ACCESS_RESOURCE_NAME } from '@lib/shared/auth/resources/Access/Access.constants';
import { OTP_RESOURCE_NAME } from '@lib/shared/auth/resources/Otp/Otp.constants';
import { PRODUCT_RESOURCE_NAME } from '@lib/shared/commerce/resources/Product/Product.constants';
import { GROUP_RESOURCE_NAME } from '@lib/shared/group/resources/Group/Group.constants';
import { USER_RESOURCE_NAME } from '@lib/shared/user/resources/User/User.constants';

export const resourceRoute: RouteModel = {
  icon: 'database',
  navigation: ROUTE_NAVIGATION.NAVIGATION,
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
};
