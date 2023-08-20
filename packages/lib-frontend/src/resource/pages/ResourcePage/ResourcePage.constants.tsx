import { OtpTable } from '#lib-frontend/auth/containers/OtpTable/OtpTable';
import { type ResourcePageItemModel } from '#lib-frontend/resource/pages/ResourcePage/ResourcePage.models';
import { UserTable } from '#lib-frontend/user/containers/UserTable/UserTable';
import { OTP_RESOURCE_NAME } from '#lib-shared/auth/resources/Otp/Otp.constants';
import { USER_RESOURCE_NAME } from '#lib-shared/user/resources/User/User.constants';

export const RESOURCE_ITEMS = {
  [OTP_RESOURCE_NAME]: {
    element: <OtpTable />,
    label: ({ t }) => t('auth:otp'),
  },
  [USER_RESOURCE_NAME]: {
    element: <UserTable />,
    label: ({ t }) => t('user:user'),
  },
} as Record<string, ResourcePageItemModel<unknown, unknown, unknown>>;
