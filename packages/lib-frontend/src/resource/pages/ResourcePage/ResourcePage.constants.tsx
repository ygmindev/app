import { OtpTable } from '#lib-frontend/auth/containers/OtpTable/OtpTable';
import { RatingAgencyTable } from '#lib-frontend/funding/containers/RatingAgencyTable/RatingAgencyTable';
import { type ResourcePageItemModel } from '#lib-frontend/resource/pages/ResourcePage/ResourcePage.models';
import { trimPathname } from '#lib-frontend/route/utils/trimPathname/trimPathname';
import { UserTable } from '#lib-frontend/user/containers/UserTable/UserTable';
import { OTP_RESOURCE_NAME } from '#lib-shared/auth/resources/Otp/Otp.constants';
import { transformKeys } from '#lib-shared/core/utils/transformKeys/transformKeys';
import { RATING_AGENCY_RESOURCE_NAME } from '#lib-shared/funding/resources/RatingAgency/RatingAgency.constants';
import { USER_RESOURCE_NAME } from '#lib-shared/user/resources/User/User.constants';

export const RESOURCE_ITEMS = transformKeys<
  Record<string, ResourcePageItemModel<unknown, unknown, unknown>>
>(
  {
    [OTP_RESOURCE_NAME]: {
      element: <OtpTable />,
      label: ({ t }) => t('auth:otp'),
    },
    [RATING_AGENCY_RESOURCE_NAME]: {
      element: <RatingAgencyTable />,
      label: ({ t }) => t('funding:ratingAgency'),
    },
    [USER_RESOURCE_NAME]: {
      element: <UserTable />,
      label: ({ t }) => t('user:user'),
    },
  },
  trimPathname,
);
