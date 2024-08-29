import { SignInButton } from '@lib/frontend/auth/components/SignInButton/SignInButton';
import { type SignInButtonPropsModel } from '@lib/frontend/auth/components/SignInButton/SignInButton.models';
import { render } from '@lib/frontend/test/utils/render/render';
import { withTestComponent } from '@lib/frontend/test/utils/withTestComponent/withTestComponent';

const { Component, displayName, testID } = withTestComponent<SignInButtonPropsModel>({
  target: SignInButton,
});

describe(displayName, () => {
  test('works', async () => {
    const { findByTestId } = await render({ element: <Component /> });
    expect(await findByTestId(testID)).toBeTruthy();
  });
});
