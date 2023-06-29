import { type OtpFormModel } from '#lib-frontend/auth/containers/OtpForm/OtpForm.models';
import {
  type UsernameFormModel,
  type UsernameFormPropsModel,
} from '#lib-frontend/auth/containers/UsernameForm/UsernameForm.models';

export type SignInFormModel = UsernameFormModel & OtpFormModel;

export type SignInFormPropsModel = Pick<UsernameFormPropsModel, 'method' | 'mode'>;
