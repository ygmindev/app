import type { OtpFormModel } from '@lib/frontend/auth/containers/OtpForm/OtpForm.models';
import type { SIGN_IN_FORM_MODE } from '@lib/frontend/auth/containers/SignInForm/SignInForm.constants';
import type { UsernameFormModel } from '@lib/frontend/auth/containers/UsernameForm/UsernameForm.models';
import type { StylePropsModel } from '@lib/frontend/style/style.models';

export type SignInFormModeModel = `${SIGN_IN_FORM_MODE}`;

export interface SignInFormModel extends UsernameFormModel, OtpFormModel {}

export interface SignInFormPropsModel extends StylePropsModel {
  mode: SignInFormModeModel;
}
