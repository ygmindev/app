import { OTP_FIELDS } from '@lib/frontend/auth/hooks/useOtpResource/useOtpResource.constants';
import type { UseOtpResourceModel } from '@lib/frontend/auth/hooks/useOtpResource/useOtpResource.models';
import { useResourceMethod } from '@lib/frontend/resource/hooks/useResourceMethod/useResourceMethod';
import {
  OTP_IF_DOES_NOT_EXIST,
  OTP_RESOURCE_NAME,
} from '@lib/shared/auth/resources/Otp/Otp.constants';
import type { OtpFormModel, OtpModel } from '@lib/shared/auth/resources/Otp/Otp.models';
import { RESOURCE_METHOD_TYPE } from '@lib/shared/resource/resource.constants';

export const useOtpResource = (): UseOtpResourceModel => {
  const { query: create } = useResourceMethod<RESOURCE_METHOD_TYPE.CREATE, OtpModel, OtpFormModel>({
    fields: [{ result: OTP_FIELDS }],
    method: RESOURCE_METHOD_TYPE.CREATE,
    name: OTP_RESOURCE_NAME,
  });
  const { query: createIfNotExists } = useResourceMethod<
    RESOURCE_METHOD_TYPE.CREATE,
    OtpModel,
    OtpFormModel
  >({
    fields: [{ result: OTP_FIELDS }],
    method: RESOURCE_METHOD_TYPE.CREATE,
    name: OTP_IF_DOES_NOT_EXIST,
  });

  return { create, createIfNotExists };
};
