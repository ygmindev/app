import { useOtpResource } from '#lib-frontend/auth/hooks/useOtpResource/useOtpResource';
import { type ResourceItemModel } from '#lib-frontend/resource/pages/ResourcePage/ResourcePage.models';
import { useUserResource } from '#lib-frontend/user/hooks/useUserResource/useUserResource';
import { OTP_RESOURCE_NAME } from '#lib-shared/auth/resources/Otp/Otp.constants';
import { type OtpFormModel, type OtpModel } from '#lib-shared/auth/resources/Otp/Otp.models';
import { USER_RESOURCE_NAME } from '#lib-shared/user/resources/User/User.constants';
import { type UserFormModel, type UserModel } from '#lib-shared/user/resources/User/User.models';

export const RESOURCE_ITEMS = {
  [OTP_RESOURCE_NAME]: {
    label: ({ t }) => t('auth:otp'),
    service: useOtpResource,
  } as ResourceItemModel<OtpModel, OtpFormModel>,
  [USER_RESOURCE_NAME]: {
    columns: [{ id: 'first' }, { id: 'last' }],
    filters: [{ id: 'first' }, { id: 'last' }],
    label: ({ t }) => t('user:user'),
    service: useUserResource,
  } as ResourceItemModel<UserModel, UserFormModel>,
} as Record<string, ResourceItemModel<unknown, unknown, unknown>>;
