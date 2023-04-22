import type { OtpFormModel } from '@lib/frontend/auth/containers/OtpForm/OtpForm.models';
import type { SIGN_IN_FORM_MODE } from '@lib/frontend/auth/containers/SignInForm/SignInForm.constants';
import type {
  UsernameFormModel,
  UsernameFormPropsModel,
} from '@lib/frontend/auth/containers/UsernameForm/UsernameForm.models';

export type SignInFormModeModel = `${SIGN_IN_FORM_MODE}`;

export interface SignInFormModel extends UsernameFormModel, OtpFormModel {}

export interface SignInFormPropsModel extends Pick<UsernameFormPropsModel, 'method'> {
  mode: SignInFormModeModel;
}
