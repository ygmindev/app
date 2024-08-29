import { OAuthRedirectPage } from '@lib/frontend/auth/pages/OAuthRedirectPage/OAuthRedirectPage';
import { type OAuthRedirectPagePropsModel } from '@lib/frontend/auth/pages/OAuthRedirectPage/OAuthRedirectPage.models';
import { render } from '@lib/frontend/test/utils/render/render';
import { withTestComponent } from '@lib/frontend/test/utils/withTestComponent/withTestComponent';

const { Component, displayName, testID } = withTestComponent<OAuthRedirectPagePropsModel>({
  target: OAuthRedirectPage,
});

describe(displayName, () => {
  test('works', async () => {
    const { findByTestId } = await render({ element: <Component /> });
    expect(await findByTestId(testID)).toBeTruthy();
  });
});
