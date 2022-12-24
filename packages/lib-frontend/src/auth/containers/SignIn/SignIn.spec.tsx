import { SignIn } from '@lib/frontend/auth/containers/SignIn/SignIn';
import type { SignInPropsModel } from '@lib/frontend/auth/containers/SignIn/SignIn.models';
import { render } from '@lib/frontend/test/utils/render/render';
import { withTestComponent } from '@lib/frontend/test/utils/withTestComponent/withTestComponent';

const { Component, displayName, testID } = withTestComponent<SignInPropsModel>({ target: SignIn });

describe(displayName, () => {
  test('works', async () => {
    const { queryByTestId } = render(<Component />);
    expect(queryByTestId(testID)).toBeTruthy();
  });
});
