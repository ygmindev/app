import { OTP_FIELDS } from '#lib-frontend/auth/hooks/useOtpResource/useOtpResource.constants';
import { type UseOtpResourceModel } from '#lib-frontend/auth/hooks/useOtpResource/useOtpResource.models';
import { useResource } from '#lib-frontend/resource/hooks/useResource/useResource';
import { OTP_RESOURCE_NAME } from '#lib-shared/auth/resources/Otp/Otp.constants';
import { type OtpFormModel, type OtpModel } from '#lib-shared/auth/resources/Otp/Otp.models';

export const useOtpResource = (): UseOtpResourceModel =>
  useResource<OtpModel, OtpFormModel>({
    fields: [{ result: OTP_FIELDS }],
    name: OTP_RESOURCE_NAME,
  });
