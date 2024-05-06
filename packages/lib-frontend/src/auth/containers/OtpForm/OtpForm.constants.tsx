import { type FormValidatorsModel } from '@lib/frontend/data/data.models';
import { validateLength } from '@lib/frontend/data/utils/validateLength/validateLength';
import { type OtpFormModel } from '@lib/shared/auth/resources/Otp/Otp.models';
import toNumber from 'lodash/toNumber';

export const OTP_FORM_VALIDATORS: FormValidatorsModel<OtpFormModel> = {
  otp: validateLength(toNumber(process.env.SERVER_APP_OTP_LENGTH)),
};
