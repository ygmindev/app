import { type ResourceTablePropsModel } from '#lib-frontend/resource/components/ResourceTable/ResourceTable.models';
import { OTP_RESOURCE_NAME } from '#lib-shared/auth/resources/Otp/Otp.constants';
import { type OtpFormModel, type OtpModel } from '#lib-shared/auth/resources/Otp/Otp.models';

export const OTP_TABLE_PROPS = {
  columns: [{ id: 'otp' }],
  name: OTP_RESOURCE_NAME,
} satisfies Omit<ResourceTablePropsModel<OtpModel, OtpFormModel>, 'service'>;
