import type { OtpFormModel } from '@lib/frontend/auth/containers/OtpForm/OtpForm.models';
import type { FormValidatorsModel } from '@lib/frontend/form/form.models';
import { validateLength } from '@lib/frontend/form/utils/validateLength/validateLength';
import { OTP_LENGTH } from '@lib/shared/auth/resources/Otp/Otp.constants';

export const OTP_FORM_VALIDATORS: FormValidatorsModel<OtpFormModel> = {
  otp: validateLength(OTP_LENGTH),
};
