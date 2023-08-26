import { type OtpFormModel } from '#lib-frontend/auth/containers/OtpForm/OtpForm.models';
import {
  type UsernameFormModel,
  type UsernameFormPropsModel,
} from '#lib-frontend/auth/containers/UsernameForm/UsernameForm.models';
import { type LayoutPropsModel } from '#lib-frontend/style/hooks/useLayoutStyles/useLayoutStyles.models';

export type SignInFormModel = UsernameFormModel & OtpFormModel;

export type SignInFormPropsModel = LayoutPropsModel &
  Pick<UsernameFormPropsModel, 'method' | 'mode'> & {
    redirectTo?: string;
  };
