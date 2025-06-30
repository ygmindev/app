import { type ResourceParamsModel } from '@lib/frontend/resource/resource.models';
import { OTP_RESOURCE_NAME } from '@lib/model/auth/Otp/Otp.constants';
import { type OtpModel } from '@lib/model/auth/Otp/Otp.models';

export const OTP_RESOURCE_PARAMS = {
  fields: [{ id: 'email' }],
  name: OTP_RESOURCE_NAME,
} satisfies ResourceParamsModel<OtpModel>;
