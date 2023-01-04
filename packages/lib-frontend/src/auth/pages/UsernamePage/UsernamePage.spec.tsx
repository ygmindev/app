import { UsernamePage } from '@lib/frontend/auth/pages/UsernamePage/UsernamePage';
import type { UsernamePagePropsModel } from '@lib/frontend/auth/pages/UsernamePage/UsernamePage.models';
import { render } from '@lib/frontend/test/utils/render/render';
import { withTestComponent } from '@lib/frontend/test/utils/withTestComponent/withTestComponent';

const { Component, displayName, testID } = withTestComponent<UsernamePagePropsModel>({
  target: UsernamePage,
});

describe(displayName, () => {
  test('works', async () => {
    const { queryByTestId } = render(<Component />);
    expect(queryByTestId(testID)).toBeTruthy();
  });
});
