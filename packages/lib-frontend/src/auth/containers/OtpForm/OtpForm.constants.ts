import type { OtpFormModel } from '@lib/frontend/auth/containers/OtpForm/OtpForm.models';
import { ICON } from '@lib/frontend/core/components/Icon/Icon.constants';
import type { FormValidatorsModel } from '@lib/frontend/core/hooks/useForm/useForm.models';
import { exactLength } from '@lib/frontend/core/utils/validators/validators';
import type { AlertDataModel } from '@lib/frontend/notification/components/Alert/Alert.models';
import { OTP_LENGTH } from '@lib/shared/auth/resources/Otp/Otp.constants';

export const OTP_FORM_VALIDATORS: FormValidatorsModel<OtpFormModel> = {
  otp: exactLength(OTP_LENGTH),
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
