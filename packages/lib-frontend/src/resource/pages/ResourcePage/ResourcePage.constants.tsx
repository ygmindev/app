import { UtilityTable } from '#lib-frontend/admin/containers/UtilityTable/UtilityTable';
import { VendorTable } from '#lib-frontend/admin/containers/VendorTable/VendorTable';
import { OtpTable } from '#lib-frontend/auth/containers/OtpTable/OtpTable';
import { FundingTable } from '#lib-frontend/funding/containers/FundingTable/FundingTable';
import { RatingAgencyTable } from '#lib-frontend/funding/containers/RatingAgencyTable/RatingAgencyTable';
import { type ResourcePageItemModel } from '#lib-frontend/resource/pages/ResourcePage/ResourcePage.models';
import { UserTable } from '#lib-frontend/user/containers/UserTable/UserTable';
import { UTILITY_RESOURCE_NAME } from '#lib-shared/admin/resources/Utility/Utility.constants';
import { VENDOR_RESOURCE_NAME } from '#lib-shared/admin/resources/Vendor/Vendor.constants';
import { OTP_RESOURCE_NAME } from '#lib-shared/auth/resources/Otp/Otp.constants';
import { FUNDING_RESOURCE_NAME } from '#lib-shared/funding/resources/Funding/Funding.constants';
import { RATING_AGENCY_RESOURCE_NAME } from '#lib-shared/funding/resources/RatingAgency/RatingAgency.constants';
import { USER_RESOURCE_NAME } from '#lib-shared/user/resources/User/User.constants';

export const RESOURCE_ITEMS: Record<string, ResourcePageItemModel<unknown, unknown, unknown>> = {
  [FUNDING_RESOURCE_NAME]: {
    element: <FundingTable />,
  },
  [OTP_RESOURCE_NAME]: {
    element: <OtpTable />,
  },
  [RATING_AGENCY_RESOURCE_NAME]: {
    element: <RatingAgencyTable />,
  },
  [USER_RESOURCE_NAME]: {
    element: <UserTable />,
  },
  [UTILITY_RESOURCE_NAME]: {
    element: <UtilityTable />,
  },
  [VENDOR_RESOURCE_NAME]: {
    element: <VendorTable />,
  },
};
