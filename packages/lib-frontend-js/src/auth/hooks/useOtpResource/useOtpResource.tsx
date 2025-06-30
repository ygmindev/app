import { type UseOtpResourceModel } from '@lib/frontend/auth/hooks/useOtpResource/useOtpResource.models';
import { OTP_RESOURCE_PARAMS } from '@lib/frontend/auth/resources/Otp/Otp.constants';
import { useResource } from '@lib/frontend/resource/hooks/useResource/useResource';
import { type OtpModel } from '@lib/model/auth/Otp/Otp.models';

export const useOtpResource = (): UseOtpResourceModel =>
  useResource<OtpModel>({
    ...OTP_RESOURCE_PARAMS,
  });
