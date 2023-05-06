import { render } from '@lib/frontend/test/utils/render/render';
import { withTestComponent } from '@lib/frontend/test/utils/withTestComponent/withTestComponent';
import { AccountPage } from '@lib/frontend/user/pages/AccountPage/AccountPage';
import type { AccountPagePropsModel } from '@lib/frontend/user/pages/AccountPage/AccountPage.models';

const { Component, displayName, testID } = withTestComponent<AccountPagePropsModel>({
  target: AccountPage,
});

describe(displayName, () => {
  test('works', async () => {
    const { findByTestId } = render({ element: <Component /> });
    expect(await findByTestId(testID)).toBeTruthy();
  });
});
