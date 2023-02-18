import { AccountPage } from '@lib/frontend/user/pages/AccountPage/AccountPage';
import type { AccountPagePropsModel } from '@lib/frontend/user/pages/AccountPage/AccountPage.models';
import { render } from '@lib/frontend/test/utils/render/render';
import { withTestComponent } from '@lib/frontend/test/utils/withTestComponent/withTestComponent';

const { Component, displayName, testID } = withTestComponent<AccountPagePropsModel>({
  target: AccountPage,
});

describe(displayName, () => {
  test('works', async () => {
    const { queryByTestId } = render(<Component />);
    expect(queryByTestId(testID)).toBeTruthy();
  });
});
