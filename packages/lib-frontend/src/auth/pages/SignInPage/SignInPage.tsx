import { SignInForm } from '@lib/frontend/auth/containers/SignInForm/SignInForm';
import type { SignInPagePropsModel } from '@lib/frontend/auth/pages/SignInPage/SignInPage.models';
import { Wrapper } from '@lib/frontend/core/components/Wrapper/Wrapper';
import type { SFCModel } from '@lib/frontend/core/core.models';

export const SignInPage: SFCModel<SignInPagePropsModel> = ({ mode, testID }) => {
  return (
    <Wrapper
      grow
      p
      spacing
      testID={testID}>
      <SignInForm mode={mode} />
    </Wrapper>
  );
};
