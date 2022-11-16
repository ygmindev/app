import { SignIn } from '@lib/frontend/auth/containers/SignIn/SignIn';
import type { SignInPropsModel } from '@lib/frontend/auth/containers/SignIn/SignIn.models';
import { render } from '@lib/frontend/testing/utils/render/render';
import { withTestComponent } from '@lib/frontend/testing/utils/withTestComponent/withTestComponent';

const { Component, displayName, testID } = withTestComponent<SignInPropsModel>({ target: SignIn });

describe(displayName, () => {
  test('works', async () => {
    const { queryByTestId } = render(<Component />);
    expect(queryByTestId(testID)).toBeTruthy();
  });
});
