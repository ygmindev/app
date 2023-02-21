import { SignInForm } from '@lib/frontend/auth/containers/SignInForm/SignInForm';
import type { SignInPagePropsModel } from '@lib/frontend/auth/pages/SignInPage/SignInPage.models';
import type { SFCModel } from '@lib/frontend/core/core.models';
import { CenterLayout } from '@lib/frontend/core/layouts/CenterLayout/CenterLayout';

export const SignInPage: SFCModel<SignInPagePropsModel> = ({ mode, testID }) => (
  <CenterLayout testID={testID}>
    <SignInForm mode={mode} />
  </CenterLayout>
);
