import { type ResourceTablePropsModel } from '#lib-frontend/resource/components/ResourceTable/ResourceTable.models';
import { type OtpFormModel, type OtpModel } from '#lib-shared/auth/resources/Otp/Otp.models';

export const OTP_TABLE_PROPS = {
  columns: [{ _id: 'otp' }],
  filters: [{ _id: 'otp' }],
} satisfies Omit<ResourceTablePropsModel<OtpModel, OtpFormModel>, 'service'>;
