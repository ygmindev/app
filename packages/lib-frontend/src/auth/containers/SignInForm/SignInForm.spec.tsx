import { SignInForm } from '@lib/frontend/auth/containers/SignInForm/SignInForm';
import { type SignInFormPropsModel } from '@lib/frontend/auth/containers/SignInForm/SignInForm.models';
import { render } from '@lib/frontend/test/utils/render/render';
import { withTestComponent } from '@lib/frontend/test/utils/withTestComponent/withTestComponent';

const { Component, displayName, testID } = withTestComponent<SignInFormPropsModel>({
  target: SignInForm,
});

describe(displayName, () => {
  test('works', async () => {
    const { findByTestId } = await render({ element: <Component /> });
    expect(await findByTestId(testID)).toBeTruthy();
  });
});
