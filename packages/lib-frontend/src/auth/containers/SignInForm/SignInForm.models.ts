import { type UsernameFormPropsModel } from '@lib/frontend/auth/containers/UsernameForm/UsernameForm.models';

export type SignInFormPropsModel = Pick<
  UsernameFormPropsModel,
  'method' | 'mode' | 'successMessage' | 'redirectTo'
>;
