import type { OtpFormModel } from '@lib/frontend/auth/containers/OtpForm/OtpForm.models';
import type {
  UsernameFormModel,
  UsernameFormPropsModel,
} from '@lib/frontend/auth/containers/UsernameForm/UsernameForm.models';

export interface SignInFormModel extends UsernameFormModel, OtpFormModel {}

export interface SignInFormPropsModel extends Pick<UsernameFormPropsModel, 'method' | 'mode'> {}
