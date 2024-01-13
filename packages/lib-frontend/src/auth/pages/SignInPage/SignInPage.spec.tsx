import { SignInPage } from '@lib-frontend/auth/pages/SignInPage/SignInPage';
import { type SignInPagePropsModel } from '@lib-frontend/auth/pages/SignInPage/SignInPage.models';
import { render } from '@lib-frontend/test/utils/render/render';
import { withTestComponent } from '@lib-frontend/test/utils/withTestComponent/withTestComponent';

const { Component, displayName, testID } = withTestComponent<SignInPagePropsModel>({
  target: SignInPage,
});

describe(displayName, () => {
  test('works', async () => {
    const { findByTestId } = await render({ element: <Component /> });
    expect(await findByTestId(testID)).toBeTruthy();
  });
});
