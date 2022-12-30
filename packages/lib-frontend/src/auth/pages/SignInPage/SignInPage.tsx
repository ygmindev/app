import { SignInForm } from '@lib/frontend/auth/containers/SignInForm/SignInForm';
import { Wrapper } from '@lib/frontend/core/components/Wrapper/Wrapper';
import type { FCModel, PagePropsModel } from '@lib/frontend/core/core.models';
import { Root } from '@lib/frontend/root/containers/Root/Root';

export const SignInPage: FCModel<PagePropsModel> = ({ initialState, testID }) => {
  return (
    <Root initialState={initialState}>
      <Wrapper
        p
        spacing
        testID={testID}>
        <SignInForm />
      </Wrapper>
    </Root>
  );
};
