import { type SignInFormPropsModel } from '@lib/frontend/auth/containers/SignInForm/SignInForm.models';
import { type PagePropsModel } from '@lib/frontend/core/core.models';

export type SignInPagePropsModel = PagePropsModel & Pick<SignInFormPropsModel, 'mode' | 'method'>;
