import { UtilityTable } from '@lib/frontend/admin/containers/UtilityTable/UtilityTable';
import { VendorTable } from '@lib/frontend/admin/containers/VendorTable/VendorTable';
import { AccessTable } from '@lib/frontend/auth/containers/AccessTable/AccessTable';
import { OtpTable } from '@lib/frontend/auth/containers/OtpTable/OtpTable';
import { ProductTable } from '@lib/frontend/commerce/containers/ProductTable/ProductTable';
import { type RouteModel } from '@lib/frontend/route/route.models';
import { UserTable } from '@lib/frontend/user/containers/UserTable/UserTable';
import { UTILITY_RESOURCE_NAME } from '@lib/shared/admin/resources/Utility/Utility.constants';
import { VENDOR_RESOURCE_NAME } from '@lib/shared/admin/resources/Vendor/Vendor.constants';
import { ACCESS_RESOURCE_NAME } from '@lib/shared/auth/resources/Access/Access.constants';
import { OTP_RESOURCE_NAME } from '@lib/shared/auth/resources/Otp/Otp.constants';
import { PRODUCT_RESOURCE_NAME } from '@lib/shared/commerce/resources/Product/Product.constants';
import { USER_RESOURCE_NAME } from '@lib/shared/user/resources/User/User.constants';

export const RESOURCE_PAGE_ROUTES: Array<RouteModel> = [
  {
    element: <AccessTable />,
    pathname: ACCESS_RESOURCE_NAME,
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
    element: <UtilityTable />,
    pathname: UTILITY_RESOURCE_NAME,
  },
  {
    element: <VendorTable />,
    pathname: VENDOR_RESOURCE_NAME,
  },
  {
    element: <ProductTable />,
    pathname: PRODUCT_RESOURCE_NAME,
  },
];
