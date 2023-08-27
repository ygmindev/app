import toNumber from 'lodash/toNumber';

import { type OtpFormModel } from '#lib-frontend/auth/containers/OtpForm/OtpForm.models';
import { type FormValidatorsModel } from '#lib-frontend/data/data.models';
import { validateLength } from '#lib-frontend/data/utils/validateLength/validateLength';

export const OTP_FORM_VALIDATORS: FormValidatorsModel<OtpFormModel> = {
  otp: validateLength(toNumber(process.env.SERVER_OTP_LENGTH)),
};

export const OTP_FORM_TEST_ID = 'otp';
