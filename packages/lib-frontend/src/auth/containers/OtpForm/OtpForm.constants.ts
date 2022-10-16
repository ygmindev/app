import type { OtpFormModel } from '@lib/frontend/auth/containers/OtpForm/OtpForm.models';
import { ICON } from '@lib/frontend/core/decorators/withIconProps/withIconProps.constants';
import type { FormValidatorsModel } from '@lib/frontend/form/form.models';
import { validateLength } from '@lib/frontend/form/utils/validateLength/validateLength';
import type { AlertDataModel } from '@lib/frontend/notification/components/Alert/Alert.models';
import { OTP_LENGTH } from '@lib/shared/auth/resources/Otp/Otp.constants';

export const OTP_FORM_VALIDATORS: FormValidatorsModel<OtpFormModel> = {
  otp: validateLength(OTP_LENGTH),
};

export const OTP_ALERT: AlertDataModel = {
  color: 'error',
  icon: ICON.hand,
  message: ({ t }) => t('auth:messages.otpError'),
};

export const USER_EXISTS_ALERT: AlertDataModel = {
  color: 'error',
  icon: ICON.people,
  message: ({ t }) => t('auth:messages.userExistsError'),
};
