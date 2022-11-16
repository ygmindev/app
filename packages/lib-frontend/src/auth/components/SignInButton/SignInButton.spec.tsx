import { SignInButton } from '@lib/frontend/auth/components/SignInButton/SignInButton';
import type { SignInButtonPropsModel } from '@lib/frontend/auth/components/SignInButton/SignInButton.models';
import { render } from '@lib/frontend/testing/utils/render/render';
import { withTestComponent } from '@lib/frontend/testing/utils/withTestComponent/withTestComponent';

const { Component, displayName, testID } = withTestComponent<SignInButtonPropsModel>({
  target: SignInButton,
});

describe(displayName, () => {
  test('works', async () => {
    const { queryByTestId } = render(<Component />);
    expect(queryByTestId(testID)).toBeTruthy();
  });
});
