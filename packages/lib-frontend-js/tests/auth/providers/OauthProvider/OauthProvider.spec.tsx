import { type OAuthProviderPropsModel } from '@lib/frontend/auth/providers/OAuthProvider/OAuthProvider.models';
import { OAuthProvider } from '@lib/frontend/auth/providers/OAuthProvider/OAuthProvider';
import { render } from '@lib/frontend/test/utils/render/render';
import { withTestComponent } from '@lib/frontend/test/utils/withTestComponent/withTestComponent';

const { Component, displayName, testID } = withTestComponent<OauthProviderPropsModel>({
  target: OauthProvider,
});

describe(displayName, () => {
  test('works', async () => {
    const { findByTestId } = await render({ element: <Component /> });
    expect(await findByTestId(testID)).toBeTruthy();
  });
});
