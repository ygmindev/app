import { type OtpFormModel } from '#lib-frontend/auth/containers/OtpForm/OtpForm.models';
import { type FormValidatorsModel } from '#lib-frontend/form/form.models';
import { validateLength } from '#lib-frontend/form/utils/validateLength/validateLength';

export const OTP_FORM_VALIDATORS: FormValidatorsModel<OtpFormModel> = {
  otp: validateLength(process.env.SERVER_OTP_LENGTH),
};

export const OTP_FORM_TEST_ID = 'otp';
