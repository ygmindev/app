import type { OtpFormModel } from '@lib/frontend/auth/containers/OtpForm/OtpForm.models';
import type { UsernameFormModel } from '@lib/frontend/auth/containers/UsernameForm/UsernameForm.models';
import type { StylePropsModel } from '@lib/frontend/core/core.models';

export interface SignInFormModel extends UsernameFormModel, OtpFormModel {}

export interface SignInFormPropsModel extends StylePropsModel {
  isCheckIfNotExists?: boolean;
}
