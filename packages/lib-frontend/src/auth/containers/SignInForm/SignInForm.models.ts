import type { OtpFormModel } from '@lib/frontend/auth/containers/OtpForm/OtpForm.models';
import type { UsernameFormModel } from '@lib/frontend/auth/containers/UsernameForm/UsernameForm.models';
import type { WithStyleModel } from '@lib/frontend/style/decorators/withStyle/withStyle.models';

export interface SignInFormModel extends UsernameFormModel, OtpFormModel {}

export interface SignInFormPropsModel extends WithStyleModel {
  isCheckIfNotExists?: boolean;
}
